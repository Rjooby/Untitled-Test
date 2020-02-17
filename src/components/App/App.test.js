import React from 'react';
import { render } from '@testing-library/react';
import App from './index';



test('renders Bored Logo Link', () => {
    const { getByText, getByLabelText } = render(<App />);
    const linkElement = getByText("BORED LOGO");
  expect(linkElement).toBeInTheDocument();
});

test('renders Log out button', () => {
    const { getByText, getByLabelText } = render(<App />);
    const buttonElement = getByText("Log Out", {selector: 'button'});

  expect(buttonElement).toBeInTheDocument();
})

