export const addCount = () => ({
  type: 'ADD',
});

export const changeMessage = (message) => ({
  type: 'CHANGE',
  message,
});

export const decidePokemon = (number) => {
  console.log(number);
  return {
  type: (number < 802 && 0 < number) ? 'TRUE': 'FALSE',
  number,
  errorText: ''
  }
}
