import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

import OrderEntry from '../OrderEntry';

test.only('handlers error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhoct:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500)),
    ),
    rest.get('http://localhoct:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500)),
    ),
  );

  render(<OrderEntry />);

  await waitFor(async () => {
	const alerts = await screen.findAllByRole('alert');

	expect(alerts).toHaveLength(2)
  })
  

  
});

test('not real test', ()=> {
	// if you ose "test.only" you dot run this test 
	// or you can use "test.skip" revers of "test.only"
})
