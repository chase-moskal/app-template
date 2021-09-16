
import style from "./my-example.css.js"
import {Component, html, mixinStyles} from "xiome/x/framework/component/component.js"

@mixinStyles(style)
export class MyExample extends Component {
	render() {
		return html`
			<h1>my-example</h1>
			<p>hello this is an example component</p>
		`
	}
}
