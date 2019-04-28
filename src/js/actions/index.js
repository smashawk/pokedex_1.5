export const decidePokemon = (number) => ({
  type: (number < 802 && 0 < number) || number == null ? 'TRUE': 'FALSE',
  number,
  errorText: ''
})
