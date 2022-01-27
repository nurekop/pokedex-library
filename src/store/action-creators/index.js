export const catchPokemon = (pokemon) => {
	return (dispatch) => {
		dispatch({
			type: 'catch',
			payload: pokemon,
		});
	};
};

export const releasePokemon = (pokemon) => {
	return (dispatch) => {
		dispatch({
			type: 'release',
			payload: pokemon,
		});
	};
};
