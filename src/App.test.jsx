import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Galleria Contemporario UI Lifecycle Tests', () => {

  test('renders the main application brand header text layout nodes', () => {
    render(<App />);
    const brandingTitle = screen.getByRole('link', { name: /GALLERIA CONTEMPORARIO/i });
    expect(brandingTitle).toBeInTheDocument();
  });

  test('admin configuration curation desk form stays closed by default', () => {
    render(<App />);
    const inputField = screen.queryByPlaceholderText(/Art Piece Title.../i);
    expect(inputField).not.toBeInTheDocument();
  });

  test('clicking the Add Product button triggers the admin panel open', () => {
    render(<App />);
    
    const toggleButton = screen.getByRole('button', { name: /Add New Art Piece/i });
    fireEvent.click(toggleButton);

    // Confirm form input box displays cleanly
    const activeFormInput = screen.getByPlaceholderText(/Art Piece Title.../i);
    expect(activeFormInput).toBeInTheDocument();
  });
});
