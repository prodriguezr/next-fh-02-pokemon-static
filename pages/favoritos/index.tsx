import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/layouts';
import { PokemonFavoriteList } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { LocalFavoritos } from '../../utils';

const FavoritosPage = () => {
	const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([] as number[]);

	useEffect(() => {
		setFavoritesPokemons(LocalFavoritos.pokemons);
	}, [])

	return (
		<MainLayout title='Pokemon App - Favoritos'>
			{
				favoritesPokemons.length === 0
					? (<NoFavorites />)
					: (
						<PokemonFavoriteList pokemons={favoritesPokemons} />
					)
			}
		</MainLayout>
	)
}

export default FavoritosPage;