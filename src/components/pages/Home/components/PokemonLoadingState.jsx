import React from 'react';
import { CardContainer, Card } from '../../../style/Containers';

const PokemonLoadingState = (props) => {
  return [...Array(props.perpage)].map((el, index) => {
    return (
      <CardContainer key={index}>
        <Card skeleton></Card>
      </CardContainer>
    )
  });
}

export default PokemonLoadingState;