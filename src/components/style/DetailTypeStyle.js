import styled from '@emotion/styled';

const pokemonTypeColor = {
	normal: '#A8A878',
	fire: '#F08030',
	water: '#6890F0',
	grass: '#78C850',
	electric: '#F8D030',
	ice: '#98D8D8',
	fighting: '#C03028',
	poison: '#A040A0',
	ground: '#E0C068',
	flying: '#A890F0',
	psychic: '#F85888',
	bug: '#A8B820',
	rock: '#B8A038',
	ghost: '#705898',
	dark: '#705848',
	dragon: '#7038F8',
	steel: '#B8B8D0',
	fairy: '#F0B6BC',
};

export const TypeText = styled.p`
	background-color: ${(props) => pokemonTypeColor[props.type]};
	color: #fff;
	padding: 10px;
	border-radius: 6px;
	min-width: 85px;
	text-align: center;

	&:nth-of-type(2) {
		margin-left: 15px;
	}
`;