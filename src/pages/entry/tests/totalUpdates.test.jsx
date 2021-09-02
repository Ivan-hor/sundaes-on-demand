import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
import Options from '../Options';

test('updates scoop subtotal when scoops change', async () => {
  render(<Options optionsType="scoops" />, {wrapper: OrderDetailsProvider});

  //make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('Scoops total $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1'); //the number should be a string
  expect(vanillaInput).toHaveTextContent('2.00'); //subtotal started out as $2
});

test('update chocolate scoops to two', async () => {
  render(<Options optionsType="scoops" />);

  // update chocolate scoops to 2 and check the subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(chocolateInput).toHaveTextContent('4.00'); //sup totals is $2 + $4 we should now have subtotal of $6
});
