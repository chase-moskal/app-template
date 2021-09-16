
import {mixinShare, registerComponents, themeComponents} from "xiome/x/framework/component/component.js"

import theme from "./common/theme.css.js"
import {makeCounterModel} from "./models/my-counter.js"
import {MyExample} from "./components/my-example/my-example.js"
import {mixinMadstateSubscriptions} from "./toolbox/madstate/mixin-madstate.js"

const counter = makeCounterModel()

registerComponents(themeComponents(theme, {
	MyExample:
		mixinMadstateSubscriptions(counter.subscribe)(
			mixinShare({counter})(MyExample)
		),
}))
