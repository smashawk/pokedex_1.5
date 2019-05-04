import React from "react";
import normalArray from '../common/createNormalArray'


const ShowData = (props) =>  {
console.log('propsid',props.id)
  return(
    
      <div className="outputArea">
        <dl>
          <dt>図鑑番号</dt>
          <dd>{normalArray[Number(props.id)].no}</dd>
          <dt>名前</dt>
          <dd>{normalArray[Number(props.id)].name}</dd>
          <dt>タイプ</dt>
          <dd>
            <span>{normalArray[Number(props.id)].types[0]}</span>
            <span>{normalArray[Number(props.id)].types[1]}</span>
          </dd>
        </dl>
        <div className={"img imgNo" + props.id}></div>
        <div className={"img imgColor imgColorNo" + props.id}></div>
      </div>
  
  )
}

export default ShowData;