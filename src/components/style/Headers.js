import styled from '@emotion/styled';

export const Header1 = styled.h1`
	font-size: 1em;
	font-weight: normal;
	color: #121212;
	margin-left: ${(props) =>
		props.marginLeft ? '10px' : '0'};
`;