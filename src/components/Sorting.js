import React, {Component} from 'react';

class Sorting extends Component {
  render() {
    return (
      <div className="pull-right">
        <div className="btn-group" role="group" aria-label="sort">
          <button id="btnSortAZ" type="button" className="btn btn-default">A - Z</button>
          <button id="btnSortZA" type="button" className="btn btn-default">Z - A</button>
          <button id="btnSortClear" type="button" className="btn btn-default">Clear</button>
        </div>
      </div>
    )

  }
};

export default Sorting;
