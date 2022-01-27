import styled from '@emotion/styled';
import pokeballGrey from '../../assets/image/pokeball_icon_grey.svg';

export const Container = styled.div`
	flex-grow: 1;
	margin: 0 auto;
	padding: 0;
	position: relative;
	width: auto;
	font-family: 'Press Start 2P', Arial Black, Arial Bold, Arial, sans-serif;

	@media screen and (min-width: 1408px) {
		max-width: 1344px;
	}

	@media screen and (min-width: 1216px) {
		max-width: 1152px;
	}

	@media screen and (min-width: 1024px) {
		max-width: 960px;
	}
`;

export const ListContainer = styled.div`
	display: flex;
	flex: 1 1 auto;
	flex-wrap: wrap;
	align-items: center;
`;

export const CardContainer = styled.div`
	width: 33.33%;

	@media screen and (max-width: 840px) {
		width: 50%;
	}

	@media screen and (max-width: 530px) {
		width: 100%;
	}

	& > a {
		text-decoration: none;
	}
`;

export const Card = styled.div`
	height: 96px;
	margin: 10px;
	display: flex;
	align-items: center;
	position: relative;
	background-color: ${(props) =>
		props.skeleton ? '#ddd' : 'rgb(249 249 249 / 50%)'};
	border: solid 2px #dddddd;
	border-radius: 8px;
	overflow: hidden;
	cursor: pointer;

	&::before {
		content: url('${pokeballGrey}');
		position: absolute;
		z-index: -1;
		right: -30px;
		transform: rotate(35deg);
	}

	& > img {
		height: 96px;
		width: 96px;
	}
`;

export const EmptyStateContainer = styled.div`
	width: 100%;
	height: 75vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position relative;
	text-align: center;
	background-color: rgba(255,255,255,0.7);

	&::after {
		content: url('${pokeballGrey}');
		position: absolute;
		z-index: -1;
	}

	& > p {
		margin: 10px;

		@media screen and (max-width: 530px) {
			font-size: 0.75em;
		}
	}
`;