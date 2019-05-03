import React from "react";
import ShowData from './showDataComponent'
import createTypeArray from '../common/createTypeArray'

const TypeSearch = (props) => {

  // let typeArray = [];
  // let subTypeArray = [];

  const subTypeArray = createTypeArray(props);

  // const decideType = (e) => {

  //   // テキストを表示
  //   showTypeText();

  //   const typeSelector1Value = document.getElementById('typeSelector1').value;
  //   const typeSelector2Value = document.getElementById('typeSelector2').value;
    
  //   // reset
  //   if( !(typeSelector1Value !== '-' && typeSelector2Value !== '-')) {
    
  //       for(let i = 0; i<props.normalArray.length; i++){
  //         for(let j = 0; j < 2; j++) {
  //           if(props.normalArray[i].types[j] === typeSelector1Value || props.normalArray[i].types[j] === typeSelector2Value) {
  //             typeArray.push({
  //               key: i,
  //               number: props.normalArray[i]
  //             })
  //           }
  //         }
  //       }

  //   } else {

  //     for(let i = 0; i<props.normalArray.length; i++){
  //       for(let j = 0; j < 2; j++) {
  //         if(props.normalArray[i].types[j] === typeSelector1Value) {
  //           typeArray.push({
  //             key: i,
  //             number: props.normalArray[i]
  //           })
  //         }
  //       }
  //     }

  //     for(let i = 0; i<typeArray.length; i++){
  //       for(let j = 0; j < 2; j++) {
  //         if(typeArray[i].number.types[j] === typeSelector2Value) {
  //           subTypeArray.push(typeArray[i])
  //         }
  //       }
  //     }

  //   }
  //   console.log(typeArray)
  // }


  // const showTypeText = () => {

  //   const clickTypeText = document.getElementById('FnClickTypeText');
  //   clickTypeText.classList.add("is-show");
  // }
  // const removeTypeText = () => {

  //   const clickTypeText = document.getElementById('FnClickTypeText');
  //   clickTypeText.classList.remove("is-show");
  // }
  // const resetType = () => {
  //   const typeSelector1 = document.getElementById('typeSelector1');
  //   const typeSelector2 = document.getElementById('typeSelector2');

  //   typeSelector1.value = '-';
  //   typeSelector2.value = '-';

  //   decideType();
  //   removeTypeText();
  // }
  const nodes = [];
  for(let i = 0; i<subTypeArray.length; i++) {
    nodes.push(
      <li 
        key={subTypeArray[i].key}
        id={subTypeArray[i].number.no}
        className={"imgIcon imgType imgNo" + subTypeArray[i].number.no}
        // onClick={e => props.showData(e)}
      >
      </li>
    );
  }
  console.log(subTypeArray)

  return(
    
    <section className="searchSectionType">
      <div className="inputArea">
        <h2>2. タイプ検索</h2>
        <select id="typeSelector1" onChange={e => props.decideType(e)}>
          <option>-</option>
          <option>ノーマル</option>
          <option>ほのお</option>
          <option>みず</option>
          <option>でんき</option>
          <option>くさ</option>
          <option>こおり</option>
          <option>かくとう</option>
          <option>どく</option>
          <option>じめん</option>
          <option>ひこう</option>
          <option>エスパー</option>
          <option>むし</option>
          <option>いわ</option>
          <option>ゴースト</option>
          <option>ドラゴン</option>
          <option>あく</option>
          <option>はがね</option>
          <option>フェアリー</option>
        </select>
        <select id="typeSelector2" onChange={e => props.decideType(e)}>
          <option>-</option>
          <option>ノーマル</option>
          <option>ほのお</option>
          <option>みず</option>
          <option>でんき</option>
          <option>くさ</option>
          <option>こおり</option>
          <option>かくとう</option>
          <option>どく</option>
          <option>じめん</option>
          <option>ひこう</option>
          <option>エスパー</option>
          <option>むし</option>
          <option>いわ</option>
          <option>ゴースト</option>
          <option>ドラゴン</option>
          <option>あく</option>
          <option>はがね</option>
          <option>フェアリー</option>
        </select>
        <p>poketype{props.poketype1}</p>
        <p>poketype{props.poketype2}</p>
      {/* <button onClick={e => resetType(e)} className="resetType">タイプリセット</button> */}
    </div>

     <ShowData 
      //  showData={e => this.showData(e)}
      //  detailData={this.state.detailData}
      //  normalArray={this.props.normalArray}
     />
     
     <div>
       <p id="FnClickTypeText" className="clickTypeText">ポケモンをクリック！</p>
       <ul className="typeShowData">{nodes}</ul>
     </div>
   </section>

  )
}

export default TypeSearch;