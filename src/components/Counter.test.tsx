import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { Counter } from './Counter';

describe('Counter', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders initial count', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increment button increases count', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    fireEvent.click(incrementButton);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrement button decreases count', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    fireEvent.click(decrementButton);

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  it('reset button sets count to 0', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const resetButton = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();

    fireEvent.click(resetButton);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});
