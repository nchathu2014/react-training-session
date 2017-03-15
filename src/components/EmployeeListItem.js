import React from 'react';

const EmployeeListItem = (props) => {
  const employee = props.data;
  return (
    <li className="employee-list-item" data-emp-id={employee.id} onClick={() => {
      props.toggleListItem(employee.id)
    }}>
      <div>
        <div className="img">
          <img src={require('../img/pics/' + employee.pic)} alt="profile picture"/>
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
      </div>
      {props.isListItemOpen && props.openedListItemId == employee.id &&
      <div className="employee-list-item-details ">
        <h4>{employee.title}</h4>
        <p>{employee.city}</p>
        <p>{employee.email}</p>
        <p>{employee.cellPhone}</p>
        <p>{employee.officePhone}</p>
        <p>{employee.blog}</p>
      </div>
      }
    </li>
  )
};

export default EmployeeListItem;
