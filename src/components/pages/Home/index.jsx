import React from 'react';
import PokemonList from './components/PokemonList';
import Navbar from '../../common/Navbar';

const Home = () => {
  document.title = 'Pokedex Library';

  return (
    <div>
      <Navbar location='home' />
      <PokemonList />
    </div>
  );
}

export default Home;