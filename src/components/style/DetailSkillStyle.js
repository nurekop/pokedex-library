import styled from '@emotion/styled';

export const SkillContainer = styled.div`
	padding: 20px 20px 70px;
	background-color: #f8f8c0;
	text-align: center;

	@media (max-width: 420px) {
		padding: 20px 20px 50px;
	}
`;

export const SkillsList = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;

	@media (max-width: 420px) {
		justify-content: space-between;
	}
`;

export const SkillText = styled.p`
	text-align: center;
	margin: 0;
	padding: 10px;
	font-size: 1em;

	@media (max-width: 534px) {
		font-size: 0.7em;
	}

	@media (max-width: 420px) {
		width: 40%;
	}
`;