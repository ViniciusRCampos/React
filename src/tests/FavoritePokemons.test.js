import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test(
    'Teste se ao clicar em Favorite a aplicação redireciona para o path "/favorites"',
    () => {
    // acessar

      const { history } = renderWithRouter(<App />);

      // seleciona o objeto

      const linkToFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(history.location.pathname).toBe('/');

      // agir

      userEvent.click(linkToFavorite);

      // testar
      expect(history.location.pathname).toBe('/favorites');
      const title = screen.getByRole('heading', { name: /favorite pokémons/i,
        level: 2 });
      expect(title).toBeInTheDocument();
    },
  );
  test(
    'Teste se é exibida na tela a mensagem No favorite pokemon found,'
    + ' caso a pessoa não tenha pokémons',
    () => {
      renderWithRouter(<FavoritePokemons />);
      const text = screen.getByText(/no favorite pokemon found/i);
      expect(text).toBeInTheDocument();
    },
  );
});
