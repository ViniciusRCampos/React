import React from 'react';
import { getAllByRole, getAllByTestId, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    const pokemon = screen.getAllByTestId('pokemon-name');
    expect(pokemon).toHaveLength(1);
  });

  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    const buttons = screen.getAllByTestId('pokemon-type-button');

    buttons.forEach((element, index) => {
      expect(element).toHaveTextContent(types[index]);
    });
  });

  test('Se existe um botão "all"', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByText(/all/i);
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll)
  });
});
