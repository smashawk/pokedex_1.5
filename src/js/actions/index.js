import createTypeArray from '../common/createTypeArray'
import decideResultNo from '../common/decideResultNo'

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

export const showData = (id) => {

  console.log('id', id)

  return(
    {
      type: 'DATA',
      id
    }
  )
}

export const decidePartner = () => {

  const resultNo = decideResultNo();

  return(
    {
      type: 'PARTNER',
      resultNo
    }
  )
}

export const resetType = () => ({
  type: 'RESET'
})
