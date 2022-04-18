import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

type Props = {
	children: JSX.Element | JSX.Element[],
	title?: string,
	pokemonName?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const MainLayout: FC<Props> = ({ children, title, pokemonName }) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name='author' content='Pablo Rodríguez' />
				<meta name='description' content={`Información sobre el pokemón ${pokemonName || ''}`} />
				<meta name='keywords' content={`${title || 'Pokemon App'}, pokemón, pokedex`} />
				<meta property="og:title" content={`Información sobre el pokemon ${pokemonName}`} />
				<meta property="og:description" content={`Esta es la página sobre ${pokemonName}`} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>
			<Navbar />
			<main style={{
				padding: '0px 20px'
			}}>
				{children}
			</main>
		</>
	);
}