import React, {Component} from 'react';

class Search extends Component {

  render() {
    return (
      <div className="col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." id="txtSearch"/>
          <span className="input-group-btn">
        <button className="btn btn-default" type="button" id="btnSearch">Go!</button>
      </span>
        </div>
      </div>
    )
  };
}

export default Search;
