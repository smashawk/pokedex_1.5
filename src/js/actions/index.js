export const decidePokemon = (number) => ({
  type: (number < 803 && 0 < number) || number == null ? 'TRUE': 'FALSE',
  number,
  errorText: ''
})

export const decideType = () => {
  const typeSelector1Value = document.getElementById('typeSelector1').value;
  const typeSelector2Value = document.getElementById('typeSelector2').value;
  return(
    {
      type: 'TYPE',
      poketype1: typeSelector1Value,
      poketype2: typeSelector2Value,
    }
  )
}

export const resetType = () => ({
  type: 'RESET'
})
