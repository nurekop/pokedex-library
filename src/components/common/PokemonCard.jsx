import React from 'react';
import { CardContainer, Card } from '../style/Containers';
import { Link } from 'react-router-dom';
import { Header1 } from '../style/Headers';

const PokemonCard = (props) => {
  const { pokemon } = props;

  const url = pokemon.nickname ? `/detail/${pokemon.name}/${pokemon.nickname}` : `/detail/${pokemon.name}`

  return (
    <CardContainer>
      <Link to={url}>
        <Card>
          <img src={pokemon.image} alt={pokemon.name} />
          <Header1 marginLeft>
            {
              pokemon.nickname && pokemon.nickname !== '' ?
                pokemon.nickname.toUpperCase():
                pokemon.name.toUpperCase()
            }
          </Header1>
        </Card>
      </Link>
    </CardContainer>
  )
}

export default PokemonCard;