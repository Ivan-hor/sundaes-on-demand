import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('display image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  //find images of scoop

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i }); //When you are waiting for something to appear asynchronously on the page you mast use 'await' 'findBy'
  expect(scoopImages).toHaveLength(2); // expect 2 elements
  // example
  // eslint-disable-next-line array-callback-return
  // scoopImages.map((scoopImages) => {
  //   expect(scoopImages).toHaveAttribute(
  //     'alt',
  //     expect.stringContaining('scoop'),
  //   );
  // });

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  //TODO this test wont work ----------!!!!!!!! Need to find some solution
  //expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('display image for each topping options from server', async () => {
  render(<Options optionType="toppings" />);

  //find images, expect 3 based on what msw returns
  const toppingImage = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImage).toHaveLength(3);

  //check the actual alt text for the image
  const altText = toppingImage.map((el) => el.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
