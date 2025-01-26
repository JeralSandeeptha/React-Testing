import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Counter from './Counter';

// Test the App Component
describe('App', () => {
  
  // check whether an element render or not.
  test('renders the app component', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });
});

// Test the counter component
describe('Counter', () => {

  // counter component should be render
  test('counter component should be render', () => {
    render(<Counter />);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toBeInTheDocument();
  });

  // decrement button should be render
  test('decrement button should be render', () => {
    render(<Counter />);
    const decrementbuttonElement = screen.getByTestId('decre-button');
    expect(decrementbuttonElement).toBeInTheDocument();
  });
  
  // increament button should be render
  test('increament button should be render', () => {
    render(<Counter />);
    const increamentbuttonElement = screen.getByTestId('incre-button');
    expect(increamentbuttonElement).toBeInTheDocument();
  });
  
  // increament button should be render
  test('increament button should be render', () => {
    render(<Counter />);
    const counterEle = screen.getByTestId('count');
    expect(counterEle).toBeInTheDocument();
  });
  
  // 0 should be number data type
  test('0 should be number data type', () => {
    render(<App />);
    const counterEle = screen.getByTestId('count');

    expect(Number(counterEle.textContent)).toBe(0);
  });

  // in the beginning counter should be 0
  test('in the beginning counter should be 0', () => {
    render(<App />);
    const counterEle = screen.getByTestId('count');

    expect(typeof Number(counterEle.textContent)).toBe('number');
  });
  
  // decrement button should have - text
  test('decrement button should have - text', () => {
    render(<App />);
    const button = screen.getByTestId('decre-button');

    expect(button.textContent).toBe('-');
  });
  
  // increment button should have + text
  test('increment button should have - text', () => {
    render(<App />);
    const button = screen.getByTestId('incre-button');

    expect(button.textContent).toBe('+');
  });

  // if click the increment button count should be increase
  test('if click the increment button count should be increase', () => {
    render(<App />);
    const button = screen.getByTestId('decre-button');
    const count = screen.getByTestId('count');

    fireEvent.click(button);
    expect(Number(count.textContent)).toBe(1);
    fireEvent.click(button);
    expect(Number(count.textContent)).toBe(2);
  });

  // if click the decrement button count should be decrease
  test('if click the decrement button count should be decrease', () => {
    render(<App />);
    const button = screen.getByTestId('incre-button');
    const count = screen.getByTestId('count');

    fireEvent.click(button);
    expect(Number(count.textContent)).toBe(-1);
    fireEvent.click(button);
    expect(Number(count.textContent)).toBe(-2);
  });
})
