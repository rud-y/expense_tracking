import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import ExpenseBox from './containers/ExpenseBox';
import ErrorPage from './pages/ErrorPage';


function App () {
    return (
      <ExpenseBox/>
    );
}

export default App;
