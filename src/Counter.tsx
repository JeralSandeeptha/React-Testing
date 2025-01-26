import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }
    
    const decrement = () => {
        setCount(prev => prev - 1);
    }

    return (
        <div data-testid='counter'>
            <button data-testid='decre-button' onClick={increment}>-</button>
            <p data-testid='count'>{ count }</p>
            <button data-testid='incre-button' onClick={decrement}>+</button>
        </div>
    );

}

export default Counter;