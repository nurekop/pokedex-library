import React from 'react';
import Navbar from '../../common/Navbar';
import PokemonCard from '../../common/PokemonCard';
import { EmptyStateContainer, ListContainer } from '../../style/Containers';
import { useSelector } from 'react-redux';


const MyPokemon = () => {
  const state = useSelector((state) => state.activity);

  document.title = 'My Pokemon Page';

  return(
    <div>
      <Navbar location='owned'/>
      <ListContainer>
        {
          state.pokemons.length > 0 ?
          state.pokemons.map((pokemon, index) => {
            return <PokemonCard pokemon={pokemon} key={index} />
          }):
          <EmptyStateContainer>
            <p>You haven't catch any Pokemon yet.</p>
            <p>Go catch 'em all !</p>
          </EmptyStateContainer>
        }
      </ListContainer>
    </div>
  )
}

export default MyPokemon;