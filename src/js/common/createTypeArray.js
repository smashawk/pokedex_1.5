import normalArray from '../common/createNormalArray'

const createTypeArray = (props) => {

  let typeArray = [];
  let subTypeArray = [];

  console.log(props.poketype1)
  console.log(props.poketype2)

  // 単タイプもしくは指定なしの場合
  if( !(props.poketype1 !== '-' && props.poketype2 !== '-')) {
    console.log('-')
    for(let i = 0; i<normalArray.length; i++){
      for(let j = 0; j < 2; j++) {
        if(normalArray[i].types[j] === props.poketype1 || normalArray[i].types[j] === props.poketype2) {
          subTypeArray.push({
            key: i,
            number: normalArray[i]
          })
        }
      }
    }

  } else {


    // 複数タイプの場合
    for(let i = 0; i<normalArray.length; i++){
      for(let j = 0; j < 2; j++) {
        if(normalArray[i].types[j] === props.poketype1) {
          typeArray.push({
            key: i,
            number: normalArray[i]
          })
        }
      }
    }

    for(let i = 0; i<typeArray.length; i++){
      for(let j = 0; j < 2; j++) {
        if(typeArray[i].number.types[j] === props.poketype2) {
          subTypeArray.push(typeArray[i])
        }
      }
    }

  }

// console.log('normal',normalArray)
// console.log('type',typeArray)
// console.log('subtype',subTypeArray)

  return subTypeArray;
}

export default createTypeArray;