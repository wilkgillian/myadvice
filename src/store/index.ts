import { createStore } from 'redux';

function reducer() {
  return [
    {
      id: 1,
      name: 'Diego',
      description: 'Dor de cabeça'
    }
  ];
}

const store = createStore(reducer);

export default store;
