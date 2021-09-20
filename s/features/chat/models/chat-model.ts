
import {madstate} from "../../../toolbox/madstate/madstate.js"

export function makeChatModel() {

	const state = madstate({
		messages: [] as string[],
	})

	function postMessage(message: string) {
		state.writable.messages = [
			...state.readable.messages,
			message,
		]
	}

	return {
		state: state.readable,
		postMessage,
		subscribe: state.subscribe,
	}
}
