import React from 'react';
import { render } from '@testing-library/react';
import AnimalForm from './AnimalForm';

test('Current Animals Test Species header is appearing', () => {
  // arrange - render the component
  const { getByText } = render(<AnimalForm />);

  // act - no action to take

  // assert - get the text from the DOM and expect it to be in the document
  const headerText = getByText(/current ANIMALS test SPECIES/i);
  expect(headerText).toBeVisible();
});

test('inputs are visible', () => {});

test('form submit adds new animals to the list', () => {});
