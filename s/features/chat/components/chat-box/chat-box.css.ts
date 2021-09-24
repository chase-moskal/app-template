import { css } from 'xiome/x/framework/component/component.js';
export default css`
	:host {
		display: block;
		background-color: white;
		width: 250px;
		min-height: 400px;
	}
	p {
		color: green;
	}
	.submit {
		padding: 5px;
		border: none;
		cursor: pointer;
	}
	.input {
		padding: 5px;
	}
	.box {
		margin: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.show {
		flex-direction: column;
		align-items: center;
		row-gap: 5px;
		margin: 50px;
	}
	li {
		text-align: center;
		font-size: 20px;
	}
	ol {
		list-style: none;
		text-align: center;
	}
`;
