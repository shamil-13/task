import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('renders input properly', () => {
  render(<App />)

  const input = screen.getByTestId('count')
  expect(input).toHaveAttribute('type', 'number')
})


test('renders number of tiles as written in text box', () => {
  render(<App />)

  const input = screen.getByTestId('count')
  const btn = screen.getByTestId('btn')
  const count = 200
  fireEvent.change(input,{target:{'value':count}})
  fireEvent.click(btn)
  const container = screen.queryByTestId('tiles-container')
  
  expect(container).toBeInTheDocument()
  expect(container.querySelectorAll(".tile").length).toBe(count)
})

