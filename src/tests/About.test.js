import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testando o componente About', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const pokedex = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
    expect(pokedex).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);

    const imageLink = screen.getByRole('img');
    expect(imageLink).toBeInTheDocument();
    expect(imageLink).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });

  test('Se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const infoPokedex = screen.getAllByText(/pokémons/i);
    expect(infoPokedex).toHaveLength(2);
  });
});
