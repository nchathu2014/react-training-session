import React, {PropTypes, Component} from 'react';
import './../styles/main.scss';

import Search from './Search';
import Sorting from './Sorting';
import EmployeeList from './EmployeeList';
import Data from '../constant/constant';

class EmployeeDirectory extends Component {

  /**
   * RootComponent constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.state = {
      employeeList: Data.EMPLOYEE_LIST,
      isListItemOpen: true,
      openedListItemId: 12
    };
  }

  toggleListItem(id) {
    let that = this;
    let newState = {
      employeeList: Data.EMPLOYEE_LIST,
      isListItemOpen: "",
      openedListItemId: ""
    };
    if (this.state.isListItemOpen) {
      if (this.state.openedListItemId == id) {
        newState.isListItemOpen = false;
      } else {
        newState.isListItemOpen = true;
        newState.openedListItemId = id;
      }
    } else {
      newState.isListItemOpen = true;
      newState.openedListItemId = id;
    }
    this.setState(newState)
  }

  /**
   * Life Cycle function - render
   * @returns {XML}
   */
  render() {
    return (

      <div className="container">
        <div className="starter-template">
          <h1>
            Employee List
          </h1>
          <div id="search-container">
            <Search/>
            <Sorting/>
          </div>
          <EmployeeList employeeList={this.state.employeeList}
                        isListItemOpen={this.state.isListItemOpen}
                        openedListItemId={this.state.openedListItemId}
                        toggleListItem={this.toggleListItem}
          />
        </div>
      </div>
    );
  }
}

/**
 *
 * @type {{}}
 */
EmployeeDirectory.propTypes = {};

/**
 *
 * @type {{}}
 */
EmployeeDirectory.defaultProps = {};

export default EmployeeDirectory;
