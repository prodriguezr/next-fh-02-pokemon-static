import { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { MainLayout } from '../components/layouts';
import { PokemonList } from '../components/pokemon/PokemonList';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title='Listado de Pokemons'>
      <PokemonList pokemons={pokemons} />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: { results } } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = results.map((poke, i) => {
    poke.id = i + 1;
    poke.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`

    return poke;
  });
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
