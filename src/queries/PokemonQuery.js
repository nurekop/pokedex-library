import { gql } from '@apollo/client';

export const GET_POKEMONS_LIST = gql`
	query pokemons($limit: Int, $offset: Int) {
		pokemons(limit: $limit, offset: $offset) {
			count
			next
			previous
			status
			message
			results {
				url
				name
				image
				artwork
			}
		}
	}
`;

export const GET_POKEMONS_DETAIL = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
			id
			name
			height
			weight
			sprites {
				front_default
			}
			moves {
				move {
					name
				}
			}
			types {
				type {
					name
				}
			}
		}
	}
`;
