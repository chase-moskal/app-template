
import style from "./my-counter.css.js"
import {makeCounterModel} from "../../models/counter-model.js"
import {ComponentWithShare, html, mixinStyles} from "xiome/x/framework/component/component.js"

@mixinStyles(style)
export class MyCounter extends ComponentWithShare<{
		counter: ReturnType<typeof makeCounterModel>
	}> {

	render() {
		const {state, increment} = this.share.counter
		return html`
			<p>the count is: ${state.count}</p>
			<button @click=${increment}>increment!</button>
		`
	}
}
