import React from 'react';
import { css } from '@emotion/css';
import { TypeText } from '../../../style/DetailTypeStyle';

const DetailType = (props) => {
  return (
    <div className={css`display: flex; justify-content: center;`}>
      {
        props.types.length > 1 ?
        props.types.map((data, index) => {
          return(
            <TypeText key={index} type={data.type.name}>{data.type.name.toUpperCase()}</TypeText>
          )
        }) : 
        <TypeText type={props.types[0].type.name}>{props.types[0].type.name.toUpperCase()}</TypeText>
      }
    </div>
  )
}

export default DetailType;