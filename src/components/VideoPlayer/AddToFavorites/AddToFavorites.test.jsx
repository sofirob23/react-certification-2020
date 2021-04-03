import React from 'react';
import { render, screen } from '@testing-library/react';
import AddToFavorites from './index';

describe('Add to Favorites Tests', () => {
  test('AddToFavorites renders correctly', async () => {
    render(<AddToFavorites />);
    expect(screen.getByTestId('test-span')).toBeInTheDocument();
  });
});
