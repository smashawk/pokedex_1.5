export const decidePokemon = (number) => ({
  type: (number < 803 && 0 < number) || number == null ? 'TRUE': 'FALSE',
  number,
  errorText: ''
})
