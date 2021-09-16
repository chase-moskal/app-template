
import style from "./my-example.css.js"
import {makeCounterModel} from "../../models/my-counter.js"
import {ComponentWithShare, html, mixinStyles} from "xiome/x/framework/component/component.js"

@mixinStyles(style)
export class MyExample extends ComponentWithShare<{
		counter: ReturnType<typeof makeCounterModel>
	}> {

	render() {
		const {state, increment} = this.share.counter
		return html`
			<h1>my-example</h1>
			<p>hello this is an example component</p>
			<p>the count is: ${state.count}</p>
			<button @click=${increment}>increment!</button>
		`
	}
}
