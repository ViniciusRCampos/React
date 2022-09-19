import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  test(
    'Teste se a página contém um heading h2 com o texto Page requested not found',
    () => {
      renderWithRouter(<NotFound />);

      const textNotFound = screen.getByRole(
        'heading',
        { name: /page requested not found/i, level: 2 },
      );
      expect(textNotFound).toBeInTheDocument();
    },
  );
  test('Teste se a pagina mostra uma imagem', () => {
    renderWithRouter(<NotFound />);

    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', url);
  });
});
