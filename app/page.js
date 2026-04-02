'use client';

import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '../redux/counterSlice';
import { increment,decrement,incrementByAmount } from './features/counter/counterSlice';
export default function Home() {
  const dispatch = useDispatch();

  // 👉 state read
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit Counter</h1>

      <h2>{count}</h2>

      {/* 👉 simple actions */}
      <button onClick={() => dispatch(increment())}>
        +1
      </button>

      <button onClick={() => dispatch(decrement())}>
        -1
      </button>

      {/* 👉 payload action */}
      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>
    </div>
  );
}