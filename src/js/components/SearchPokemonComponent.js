import React from "react";
import normalArray from '../common/createNormalArray'

const SearchPokemon = (props) => {

  return(
    
    <section className="searchSectionInput">
      <div className="inputArea">
        <h2>1. 図鑑ナンバー検索</h2>
        <p className="inputAreaText">※1〜802まで</p>
        <input 
          id="inputText"
          className="inputText"
          type="text"
          onChange={e => props.decidePokemon(e.target.value)}
          placeholder="図鑑ナンバーを入力"
          />
        <p className="errorText">{props.errorText}</p>
      </div>
      <div className="outputArea">
        <dl>
          <dt>図鑑番号</dt>
          <dd>{props.number}</dd>
          <dt>名前</dt>
          <dd>{normalArray[props.number].name}</dd>
          <dt>タイプ</dt>
          <dd>
            <span>{normalArray[props.number].types[0]}</span>
            <span>{normalArray[props.number].types[1]}</span>
          </dd>
        </dl>
        <div className={"img imgNo" + props.number}></div>
      </div>
    </section>

  )
}

export default SearchPokemon;