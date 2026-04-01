'use client';  // ← Client component

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    console.log('🟢 Component mounted!');
    console.log('📊 Current state:', count);
  }, [count]);

  // For testing: Automatically dispatch actions after 2 seconds
  useEffect(() => {
    console.log('🚀 Starting auto-test in 2 seconds...');
    
    const timer = setTimeout(() => {
      console.log('========== TESTING REDUX ==========');
      
      console.log('1️⃣ Dispatching increment...');
      dispatch(increment());
      
      setTimeout(() => {
        console.log('2️⃣ Dispatching decrement...');
        dispatch(decrement());
      }, 1000);
      
      setTimeout(() => {
        console.log('3️⃣ Dispatching incrementByAmount(5)...');
        dispatch(incrementByAmount(5));
      }, 2000);
      
      setTimeout(() => {
        console.log('4️⃣ Dispatching increment again...');
        dispatch(increment());
      }, 3000);
      
      setTimeout(() => {
        console.log('========== TEST COMPLETE ==========');
        console.log('🎯 Final state:', window.store?.getState());
      }, 4000);
      
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Next.js + Redux Toolkit Demo</h1>
      <h2>Counter: {count}</h2>
      <p style={{ color: '#666', marginTop: '20px' }}>
        🔍 Check the <strong>console (F12)</strong> to see Redux actions!
      </p>
      <div>
        <button onClick={() => dispatch(increment())} style={{ margin: '5px', padding: '10px' }}>
          + Increment
        </button>
        <button onClick={() => dispatch(decrement())} style={{ margin: '5px', padding: '10px' }}>
          - Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))} style={{ margin: '5px', padding: '10px' }}>
          +5
        </button>
      </div>
    </div>
  );
}