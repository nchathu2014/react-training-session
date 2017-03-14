import React from 'react';

const EmployeeListItem = (props) => {
 const employee = props.data;
  return (
    <li className="emp" data-emp-id={employee.id}>
      <div className="img">
        <img src="../img/pics/amy_jones.jpg" alt="profile picture"/>
      </div>
      <div className="detail">
        <div className="pull-left">
          <h3>{employee.firstName} {employee.lastName}</h3>
          <p>{employee.department}</p>
        </div>
        <div className="pull-right">
          <span className="chevron"></span>
          <span className="count">{employee.reports}</span>
        </div>
      </div>
    </li>
  )
};

export default EmployeeListItem;
