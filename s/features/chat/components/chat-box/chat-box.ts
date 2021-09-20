
import style from "./chat-box.css.js"
import {makeChatModel} from "../../models/chat-model.js"
import {ComponentWithShare, html, mixinStyles} from "xiome/x/framework/component/component.js"

@mixinStyles(style)
export class ChatBox extends ComponentWithShare<{
		chat: ReturnType<typeof makeChatModel>
	}> {

	private postTimeMessage = () => {
		this.share.chat.postMessage(`hello ${Date.now()}`)
	}

	render() {
		const {state} = this.share.chat
		return html`
			<ol>
				${state.messages.map(message => html`
					<li>${message}</li>
				`)}
			</ol>
			<button
				@click=${this.postTimeMessage}>
					post message!
			</button>
		`
	}
}
