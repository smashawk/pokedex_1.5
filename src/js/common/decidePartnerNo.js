import hiragana from '../../data/hiragana.json';

  const decidePartnerNo = () => {

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
  
    // 計算
    let partnerNo = 1;
    for (let i = 0; i < hiraganaNoArray.length; i++) {
      partnerNo *= hiraganaNoArray[i];
    }
  
    partnerNo = (partnerNo + hiraganaNoArray.length) % 802
    // ここまででポケモン決定

    return partnerNo;

  }

  
export default decidePartnerNo;
