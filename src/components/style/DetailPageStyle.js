import styled from '@emotion/styled';
import pokeballGrey from '../../assets/image/pokeball_icon_grey_400.svg';

export const DetailContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	flex-direction: column;
	padding: 20px;
	background-color: rgb(255 253 240 / 80%);
	align-items: center;
	overflow: hidden;

	& > img {
		width: 100%;
		max-width: 500px;
		height: auto;
	}

	&::before {
		content: url('${pokeballGrey}');
		position: absolute;
		z-index: -1;
		left: -35px;
		bottom: -130px;
		transform: rotate(35deg);
	}
`;

export const LoadingContainer = styled.div`
	height: 100vh;
	margin: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f1f1f1;
`;

export const CatchButton = styled.button`
	font-size: 1em;
	border: solid 1px rgb(153 153 153);
	padding: 10px 20px;
	font-family: 'Press Start 2P', Arial Black, Arial Bold, Arial, sans-serif;
	border-radius: 6px;
	margin: 20px 0;
	cursor: pointer;
	color: #fff;
	box-shadow: 3px 3px 0px 0px rgb(122 112 112 / 80%);
	background-color: ${(props) =>
		props.type === 'catch' ? '#8bc34a' : '#f44336'};
	margin-left: ${(props) => (props['margin-left'] ? '15px' : '0')};

	&:disabled {
		background-color: #999;
		cursor: not-allowed;
	}

	@media screen and (max-width: 355px) {
		margin: 15px;
	}
`;

export const FailedModal = styled.div`
	position: absolute;
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 10%;

	& > p {
		background-color: #f8f8c0;
		padding: 16px;
		border: solid 2px #000;
		border-radius: 8px;
		box-shadow: 3px 3px 0px 0px rgb(0 0 0);
		margin: 16px;
		text-align: center;
		font-size: 0.75em;
	}
`;