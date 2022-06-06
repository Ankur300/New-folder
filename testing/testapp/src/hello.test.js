import { fireEvent, render, screen } from '@testing-library/react';
import Hello from './hello';

/* test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello test123/i);
    expect(linkElement).toBeInTheDocument();
  }); */


  test('test equals 0', () => {
    const { getByTestId } = render(<Hello />);
    expect(getByTestId('counter')).toHaveTextContent(0)
  });

  
  test('test equals 0', () => {
    const { getByTestId } = render(<Hello />);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent(2)
  
  });
 

 
  
  

  