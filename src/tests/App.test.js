import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente App', () => {
  test(
    'Teste se o topo da aplicação contém um conjunto fixo de links de navegação:',
    () => {
      renderWithRouter(<App />);

      const linkToHome = screen.getByRole('link', { name: 'Home' });
      const linkToAbout = screen.getByRole('link', { name: 'About' });
      const linkToFavorite = screen.getByRole('link', {
        name: 'Favorite Pokémons',
      });
      expect(linkToHome).toBeInTheDocument();
      expect(linkToAbout).toBeInTheDocument();
      expect(linkToFavorite).toBeInTheDocument();
    },
  );
  test('Teste se ao clicar em Home a aplicação redireciona para o path "/"', () => {
    // acessar

    const { history } = renderWithRouter(<App />);

    // seleciona o objeto

    const linkToHome = screen.getByRole('link', { name: 'Home' });
    expect(history.location.pathname).toBe('/');

    // agir

    userEvent.click(linkToHome);

    // testar

    const title = screen.getByRole('heading', { name: /encountered pokémons/i,
      level: 2 });
    expect(title).toBeInTheDocument();
  });
});
