import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
	background-color: #0160f0;
	padding: 20px 10px;
	border-bottom: double 8px #fffdf0;
	position: sticky;
	top: 0;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const InfoContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const NavbarText = styled.h2`
	margin: 0;
	color: #fff;
	font-size: 0.75em;

	& > a {
		color: #fff;
    text-decoration: none;
	}
`;
