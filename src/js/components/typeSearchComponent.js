import React from "react";
import ShowData from './showDataComponent'
// import createTypeArray from '../common/createTypeArray'

const TypeSearch = (props) => {


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
  for(let i = 0; i<props.subTypeArray.length; i++) {
    nodes.push(
      <li 
        key={props.subTypeArray[i].key}
        id={props.subTypeArray[i].number.no}
        className={"imgIcon imgType imgNo" + props.subTypeArray[i].number.no}
        onClick={e => props.showData(e.target.id)}
      >
      </li>
    );
  }

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
      {/* <button onClick={e => resetType(e)} className="resetType">タイプリセット</button> */}
    </div>

     <ShowData 
       id={props.id}
     />
     
     <div>
       <p id="FnClickTypeText" className="clickTypeText">ポケモンをクリック！</p>
       <ul className="typeShowData">{nodes}</ul>
     </div>
   </section>

  )
}

export default TypeSearch;