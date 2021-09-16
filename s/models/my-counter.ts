
import {madstate} from "../toolbox/madstate/madstate.js"

export function makeCounterModel() {
	const state = madstate({
		count: 0,
	})

	function increment() {
		state.writable.count += 1
	}

	return {
		state: state.readable,
		increment,
		subscribe: state.subscribe,
	}
}
