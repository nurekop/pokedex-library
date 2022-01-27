import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import DetailPage from './components/pages/DetailPage';
import MyPokemon from './components/pages/MyPokemon';
import { Container } from './components/style/Containers';

function App() {
	return (
		<Container>
			<Router>
				<Switch>
					<Route path="/detail/:name">
						<DetailPage />
					</Route>
					<Route path="/my-pokemon">
						<MyPokemon />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
