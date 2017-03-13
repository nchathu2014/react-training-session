import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = (props) => {

  let employeeList = props.employeeList;

  const generateListItems = employeeList.map((employee) => {
    return (<EmployeeListItem data={employee}/>)
  })

  return (
    <ul id="employee-list" className="list">
      {generateListItems}
    </ul>
  );
};

export default EmployeeList;
