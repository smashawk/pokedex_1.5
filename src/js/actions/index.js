export const addCount = () => ({
  type: 'ADD',
});

export const changeMessage = (message) => ({
  type: 'CHANGE',
  message,
});

export const decidePokemon = (number) => ({
  type: 'NUM',
  number,
})
