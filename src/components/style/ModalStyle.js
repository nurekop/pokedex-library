import styled from '@emotion/styled';

export const ModalContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalCard = styled.div`
  background-color: #f8f8c0;
  border-radius: 8px;
  border: solid 2px #000;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 3px 3px 0px 0px rgb(0 0 0);
`;

export const ModalText = styled.p`
	font-size: 0.8em;
	line-height: 1.5em;
`;

export const ModalInput = styled.input`
	background-color: transparent;
	border: solid 2px #000;
	margin-bottom: 18px;
	font-size: 1.25em;
	font-family: 'Press Start 2P', Arial Black, Arial Bold, Arial, sans-serif;
	line-height: 1.5em;
	height: 25px;
	width: 90%;
	border-radius: 0;
`;