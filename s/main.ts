
import {mixinShare, registerComponents, themeComponents} from "xiome/x/framework/component/component.js"

import theme from "./common/theme.css.js"
import {mixinMadstateSubscriptions} from "./toolbox/madstate/mixin-madstate.js"
import {makeCounterModel} from "./features/example-counting/models/counter-model.js"
import {MyCounter} from "./features/example-counting/components/my-counter/my-counter.js"
import {makeChatModel} from "./features/chat/models/chat-model.js"
import {ChatBox} from "./features/chat/components/chat-box/chat-box.js"

const chat = makeChatModel()
const counter = makeCounterModel()

registerComponents(themeComponents(theme, {
	ChatBox:
		mixinMadstateSubscriptions(chat.subscribe)(
			mixinShare({chat})(ChatBox)
		),
	MyCounter:
		mixinMadstateSubscriptions(counter.subscribe)(
			mixinShare({counter})(MyCounter)
		),
}))
