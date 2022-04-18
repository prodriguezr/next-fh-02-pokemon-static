const toggleFavoritos = (id: number) => {
	console.log('toggleFavoritos llamado');

	let favoritos: number[] = [];

	if (localStorage.getItem('favoritos')) {
		favoritos = JSON.parse(localStorage.getItem('favoritos') || '')

		if (favoritos.includes(id)) {
			favoritos = favoritos.filter(pokeId => pokeId !== id);
		} else {
			favoritos.push(id);
		}
	} else {
		favoritos.push(id);
	}

	localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

const existeComoFavorito = (id: number): boolean => {
	if (typeof window === 'undefined')
		return false;

	if (!localStorage.getItem('favoritos')) {
		return false;
	} else {
		const favoritos: number[] = JSON.parse(localStorage.getItem('favoritos') || '')

		return favoritos.includes(id);
	}
}

const pokemons = (): number[] => {
	return (JSON.parse(localStorage.getItem('favoritos') || '[]'));
}

const exportedFunctions = { toggleFavoritos, existeComoFavorito, pokemons }

export default exportedFunctions;