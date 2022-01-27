import React, {Suspense, lazy} from 'react';
import PokemonLoadingState from './components/PokemonLoadingState';
import Navbar from '../../common/Navbar';

const Home = () => {
  document.title = 'Pokedex Library';

  const PokemonList = lazy(() => import('./components/PokemonList'))

  return (
    <div>
      <Navbar location='home' />
      <Suspense fallback={<PokemonLoadingState perpage={8} />}>
        <PokemonList />
      </Suspense>
    </div>
  );
}

export default Home;