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
    this._initEmployeeDirectory();
    this.state = {};
    this.state.employeeList = Data.EMPLOYEE_LIST;
  }

  /**
   * Custom Function - Method binding to 'this'
   * @private
   */
  _initEmployeeDirectory() {
    //bind custom function here
  }

  /**
   * Life Cycle function - componentWillMount
   */
  componentWillMount() {
  }

  /**
   * Life Cycle function - componentDidMount
   */
  componentDidMount() {
  }

  /**
   * Life Cycle function - componentWillReceiveProps
   * @param newProps
   */
  componentWillReceiveProps(newProps) {
  }

  /**
   * Life Cycle function - shouldComponentUpdate
   * @param newProps
   * @param newState
   * @returns {boolean}
   */
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  /**
   * Life Cycle function - componentWillUpdate
   * @param nextProps
   * @param nextState
   */
  componentWillUpdate(nextProps, nextState) {
  }

  /**
   * Life Cycle function - componentDidUpdate
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
  }

  /**
   * Life Cycle function - componentWillUnmount
   */
  componentWillUnmount() {
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
          <EmployeeList employeeList={this.state.employeeList}/>
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
