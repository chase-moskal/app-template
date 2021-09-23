import { madstate } from '../../../toolbox/madstate/madstate.js';

export function makeChatModel() {
  const state = madstate({
    messages: [] as string[],
    myName: '' as string,
  });

  function postMessage(e) {
    console.log(
      state.writable.messages.map((message) => {
        message;
      })
    );
    let inputValue = e.target.parentNode.querySelector('.input').value;
    let myName = (state.writable.myName =
      e.target.parentNode.parentNode.querySelector('.myName'));
    let messages = `${myName.textContent}: ${inputValue}`;
    if (inputValue !== '') {
      state.writable.messages = [...state.writable.messages, messages];
    }
    e.target.parentNode.querySelector('.input').value = '';
  }
  function yourName(e) {
    let myName = (state.writable.myName =
      e.target.parentNode.parentNode.querySelector('.myName'));
    let inputName = e.target.parentNode.querySelector('.name').value;
    myName = e.target.parentNode.parentNode.querySelector('.myName');
    myName.textContent = inputName;
    if (myName.textContent !== '') {
      e.target.parentNode.style.display = 'none';
      e.target.parentNode.parentNode.querySelector('.show').style.display =
        'flex';
    }
  }

  return {
    state: state.readable,
    postMessage,
    yourName,
    subscribe: state.subscribe,
  };
}
