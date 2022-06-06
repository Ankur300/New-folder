import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';




test('check name', () => {
    render(<Login/>);
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  }); 
  

 
  
  

  