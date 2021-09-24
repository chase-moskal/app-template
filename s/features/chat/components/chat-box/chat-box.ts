import style from './chat-box.css.js';
import { makeChatModel } from '../../models/chat-model.js';
import {
	ComponentWithShare,
	html,
	mixinStyles,
	property,
} from 'xiome/x/framework/component/component.js';

@mixinStyles(style)
export class ChatBox extends ComponentWithShare<{
		chat: ReturnType<typeof makeChatModel>;
	}> {

	get model() { return this.share.chat }

	@property({type: String})
	private myName: string

	get isUserSignedIn() {
		return !!this.myName
	}

	#recoverMyNameFromInput() {
		const nameInput: HTMLInputElement = this.shadowRoot.querySelector("input.name")
		this.myName = nameInput?.value
	}

	#postMessage() {
		const messageInput: HTMLInputElement = this.shadowRoot.querySelector("input.input")
		const message = `${this.myName}: ${messageInput.value}`
		messageInput.value = ""
		this.model.postMessage(message)
	}

	#renderNameEntryBox() {
		return html`
			<div class="box">
				<h2>Whats your name?</h2>
				<input type=text class="name"/>
				<button
					class="submit"
					@click=${() => this.#recoverMyNameFromInput()}>
						Submit
				</button>
			</div>
		`
	}

	#renderChatHistory() {
		return html`
			<h2>Chat history</h2>
			<h2 class="myName"></h2>
			<ol>
				${this.model.state.messages.map((message) => html`
					<li>${message}</li>
				`)}
			</ol>
		`
	}

	#renderMessageInput() {
		return html`
			<input type=text class="input"/>
			<button class="submit" @click=${() => this.#postMessage()}>
				post message!
			</button>
		`
	}

	render() {
		return this.isUserSignedIn
			? html`
				<div class=show>
					${this.#renderChatHistory()}
					${this.#renderMessageInput()}
				</div>
			`
			: html`
				${this.#renderNameEntryBox()}
				<div class=show>
					${this.#renderChatHistory()}
				</div>
			`
	}
}
