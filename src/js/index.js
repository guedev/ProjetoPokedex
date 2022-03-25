const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.card-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        //alterar card mostrado
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idCartaoPokemonParaAbrir = 'card-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        //alterar pokemon selecionado no menu
        const pokemonAtivoNoMenu = document.querySelector('.active')
        pokemonAtivoNoMenu.classList.remove('active')

        const idPokemonSelecionadoNoMenu = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNoMenu.classList.add('active')
    })
})