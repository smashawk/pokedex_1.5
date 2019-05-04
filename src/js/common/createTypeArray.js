import normalArray from '../common/createNormalArray'

const createTypeArray = () => {

  const typeSelector1Value = document.getElementById('typeSelector1').value;
  const typeSelector2Value = document.getElementById('typeSelector2').value;

  let typeArray = [];
  let subTypeArray = [];

  console.log(typeSelector1Value)
  console.log(typeSelector2Value)

  // 単タイプもしくは指定なしの場合
  if( !(typeSelector1Value !== '-' && typeSelector2Value !== '-')) {
    console.log('-')
    for(let i = 0; i<normalArray.length; i++){
      for(let j = 0; j < 2; j++) {
        if(normalArray[i].types[j] === typeSelector1Value || normalArray[i].types[j] === typeSelector2Value) {
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
        if(normalArray[i].types[j] === typeSelector1Value) {
          typeArray.push({
            key: i,
            number: normalArray[i]
          })
        }
      }
    }

    for(let i = 0; i<typeArray.length; i++){
      for(let j = 0; j < 2; j++) {
        if(typeArray[i].number.types[j] === typeSelector2Value) {
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