import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces';
import { PokemonCard } from './PokemonCard';

type Props = {
	pokemons: SmallPokemon[]
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
	return (
		<Grid.Container gap={2} justify='flex-start'>
			{
				pokemons.map((pokemon) => (
					<PokemonCard pokemon={pokemon} key={pokemon.id} />
				))
			}
		</Grid.Container>
	)
}