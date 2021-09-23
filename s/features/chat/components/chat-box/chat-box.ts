import style from './chat-box.css.js';
import { makeChatModel } from '../../models/chat-model.js';
import {
  ComponentWithShare,
  html,
  mixinStyles,
} from 'xiome/x/framework/component/component.js';

@mixinStyles(style)
export class ChatBox extends ComponentWithShare<{
  chat: ReturnType<typeof makeChatModel>;
}> {
  private postTimeMessage = (e) => {
    this.share.chat.postMessage(e);
  };
  private name = (e) => {
    this.share.chat.yourName(e);
  };
  render() {
    const { state } = this.share.chat;
    return html`
      <div class="box">
        <h2>Whats your name?</h2>
        
        <input class="name" />
        <button class="submit" @click=${this.name}>Submit</button>
</div>
        <div class="show">
          <h2>chat box</h2>
					<h2 class="myName"></h2>
          <ol>
            ${state.messages.map((message) => html` <li>${message}</li> `)}
          </ol>
          <input class="input" />
          <button class="submit" @click=${this.postTimeMessage}>
            post message!
          </button>
        </div>
      </div>
    `;
  }
}
