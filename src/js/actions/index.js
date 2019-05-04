import createTypeArray from '../common/createTypeArray'

export const decidePokemon = (number) => ({
  type: (number < 803 && 0 < number) || number == null ? 'TRUE': 'FALSE',
  number,
  errorText: ''
})

export const decideType = () => {

  const subTypeArray = createTypeArray();
  console.log('sub', subTypeArray)

  return(
    {
      type: 'TYPE',
      subTypeArray
    }
  )
}

export const resetType = () => ({
  type: 'RESET'
})
