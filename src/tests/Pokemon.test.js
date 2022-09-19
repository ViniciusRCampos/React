import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  const pokemon = {
    name: 'Pikachu',
    type: 'Electric',
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
  };

  test(
    'A imagem do pokemon possui o src correto',
    () => {
      renderWithRouter(<App />);
      const pokemonImage = screen.getByRole('img', { name: `${pokemon.name} sprite` });
      expect(pokemonImage).toHaveAttribute('src', pokemon.image);
    },
  );

  test('A imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);
    const pokemonImage = screen.getByRole('img', { name: `${pokemon.name} sprite` });
    expect(pokemonImage).toHaveAttribute('alt', `${pokemon.name} sprite`);
  });

  test(
    'A imagem de favorito possui o src /star-icon.svg e alt'
     + '"Pikachu is marked as favorite"',
    () => {
      renderWithRouter(<App />);

      // Localiza e clica em mais detalhes

      const details = screen.getByRole('link', { name: /More details/i });
      userEvent.click(details);

      // Localiza e marca o pokemon como favorito

      const favorite = screen.getByRole('checkbox');
      userEvent.click(favorite);

      // Volta para Home.

      const home = screen.getByRole('link', { name: /home/i });
      userEvent.click(home);

      // Verifica se foi marcado como favorito

      const favoriteIcon = screen.getByRole(
        'img',
        { name: `${pokemon.name} is marked as favorite` },
      );
      expect(favoriteIcon).toBeInTheDocument();
      expect(favoriteIcon).toHaveAttribute('src', '/star-icon.svg');
      expect(favoriteIcon).toHaveAttribute(
        'alt',
        `${pokemon.name} is marked as favorite`,
      );
    },
  );
  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const type = screen.getByTestId('pokemon-type');
    expect(type.textContent).toBe(pokemon.type);
  });
  test('É exibido na tela um link com o href /pokemons/<id>', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });
    expect(link).toHaveAttribute('href', '/pokemons/25');
  });
});
