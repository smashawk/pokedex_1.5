import hiragana from '../../data/hiragana.json';

  const decideResultNo = () => {

    const nameArray = []
    const inputName = document.getElementById('inputName');
    var char = inputName.value;
    for(let i = 0; i < inputName.value.length; i++) {
      nameArray.push(char.substr(0,1));
      let j = inputName.value.length - i - 1;
      char = char.slice(-j);
    }
  
    const hiraganaNoArray = [];
    for(let i = 0; i < nameArray.length; i++) {
      for(let j = 0; j < hiragana.length; j++) {
        if(nameArray[i] === hiragana[j].char) {
          hiraganaNoArray.push(hiragana[j].number);
          break;
        }
  
      }
  
    }
    console.log(hiraganaNoArray);
  
    // 計算
    let resultNo = 1;
    for (let i = 0; i < hiraganaNoArray.length; i++) {
      resultNo *= hiraganaNoArray[i];
    }
  
    console.log(resultNo)
    resultNo = (resultNo + hiraganaNoArray.length) % 802
    console.log(resultNo)
    // ここまででポケモン決定

    return resultNo;

  }

export default decideResultNo;
