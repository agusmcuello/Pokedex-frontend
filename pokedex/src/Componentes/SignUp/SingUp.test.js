import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './SignUp';
const RegisterWithRouter = <BrowserRouter><SignUp /></BrowserRouter>

test('renders learn react link', () => {
  render(RegisterWithRouter);
  const linkElement = screen.getByText("Sign up in Pokedex!");
  expect(linkElement).toBeInTheDocument();
});
