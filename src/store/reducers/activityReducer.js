const initialState = {
	pokemons: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'catch':
			return {
				...state,
				pokemons: [...state.pokemons, action.payload],
			};
		case 'release':
			const filterFavorite = state.pokemons.filter((pokemon) => {
				return pokemon.name !== action.payload;
			});
			return {
				...state,
				pokemons: [...filterFavorite],
			};
		default:
			return state;
	}
};

export default reducer;
