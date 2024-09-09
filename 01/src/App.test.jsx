import {render, screen} from '@testing-library/react'
import App from './App'
import { expect } from 'vitest'


test('renders the correct content', () => {
    render(<App />)

    const headerElement = screen.getByText('Vite + React')
    expect(headerElement).toBeInTheDocument();

    const buttonElement = screen.getByText('count is 0')
    expect(buttonElement).toBeInTheDocument();
})

