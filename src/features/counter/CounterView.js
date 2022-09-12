import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Here is it [{count}]</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Increment By 10
      </button>
    </div>
  );
};

export default CounterView;
