
import theme from "./common/theme.css.js"
import {MyExample} from "./components/my-example/my-example.js"
import {registerComponents, themeComponents} from "xiome/x/framework/component/component.js"

registerComponents(themeComponents(theme, {
	MyExample,
}))
