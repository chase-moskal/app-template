import { css } from 'xiome/x/framework/component/component.js';
export default css`
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
    background-color: white;
    min-height: 400px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .show {
    display: none;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    margin: 50px;
    background-color: white;
    min-height: 400px;
    width: 250px;
  }
  li {
    text-align: center;
    font-size: 20px;
  }
  ol {
    text-align: center;
  }
`;
