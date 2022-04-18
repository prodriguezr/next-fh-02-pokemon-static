import { pokeApi } from '../api';
import { PokemonDetailsResponse, PokemonListResponse } from '../interfaces';

export const getPokemon = async (nameOrId: string) => {
	const { data } = await pokeApi.get<PokemonDetailsResponse>(`/pokemon/${nameOrId}`);

	return {
		id: data.id,
		name: data.name,
		sprites: data.sprites
	}
}

export const getPokemonNames = async (limit: number): Promise<string[]> => {
	const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${limit}`);

	const names: string[] = data.results.map(p => p.name);

	return names;
}