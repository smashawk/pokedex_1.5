import normalArray from '../common/createNormalArray'

const createTypeArray = () => {

  const typeSelector1Value = document.getElementById('typeSelector1').value;
  const typeSelector2Value = document.getElementById('typeSelector2').value;
  const typeArray = [];
  const subTypeArray = [];

  // 単タイプもしくは指定なしの場合
  if( !(typeSelector1Value !== '-' && typeSelector2Value !== '-')) {
    for(let i = 0; i<normalArray.length; i++){
      for(let j = 0; j < 2; j++) {
        if(normalArray[i].types[j] === typeSelector1Value || normalArray[i].types[j] === typeSelector2Value) {
          typeArray.push({
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
          subTypeArray.push({
            key: i,
            number: normalArray[i]
          })
        }
      }
    }

    for(let i = 0; i<subTypeArray.length; i++){
      for(let j = 0; j < 2; j++) {
        if(subTypeArray[i].number.types[j] === typeSelector2Value) {
          typeArray.push(subTypeArray[i])
        }
      }
    }

  }

  return typeArray;
  
}

export default createTypeArray;