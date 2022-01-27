import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import PokemonCard from '../../../common/PokemonCard';
import PokemonLoadingState from './PokemonLoadingState';

import { GET_POKEMONS_LIST } from '../../../../queries';

import { ListContainer } from '../../../style/Containers';


const PokemonList = () => {
  const PER_PAGE = 24;

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState({
    limit: PER_PAGE,
    offset: 0,
  })

  const { loading, data } = useQuery(GET_POKEMONS_LIST, {variables: page});

  const handleScroll = () => {
    let documentHeight = document.documentElement.offsetHeight;
    let currentScroll = window.innerHeight + document.documentElement.scrollTop;

    if(currentScroll === documentHeight) {
      setPage((prev) => {
        return {
          limit : prev.limit, 
          offset : prev.offset + PER_PAGE
        }
      })
    }
  }
  
  //Handle on data change
  useEffect(() => {
    if (data && data.pokemons) {
      setPokemons((prev) => {
        return [...prev, ...data.pokemons.results]
      })
    }
  },[data]);

  //Handle scroll and change limit and offset
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    <ListContainer>
      {
        pokemons.length > 0 &&
        pokemons.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={index} />
        })
      }
      {
        loading && <PokemonLoadingState perpage={PER_PAGE} />
      }
    </ListContainer>
  );
}

export default PokemonList;