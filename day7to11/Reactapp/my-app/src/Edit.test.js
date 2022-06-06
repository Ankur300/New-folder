import { fireEvent, render, screen } from '@testing-library/react';
import Edit from './Edit';



test('name', () => {
    render(<Edit />);
    const h2 = screen.getByText(/Edit Details/i);
    expect(h2).toBeInTheDocument();
});

  

 
  
  

  