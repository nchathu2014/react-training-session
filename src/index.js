/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import EmployeeList from './components/EmployeeList';

render(<EmployeeList/>,
  document.getElementById('app')
);
