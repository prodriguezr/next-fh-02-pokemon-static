import { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { PokemonFavoriteCard } from './';

interface Props {
	pokemons: number[];
}

export const PokemonFavoriteList: FC<Props> = ({ pokemons }) => {
	return (

		<Grid.Container gap={2} direction='row' justify='flex-start'>
			{
				pokemons.map(id => (
					<PokemonFavoriteCard key={id} pokemonId={id} />
				))
			}
		</Grid.Container>

	)
};