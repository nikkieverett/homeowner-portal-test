import React, { Component } from 'react';

import AddContractor from './AddContractor';

class ContractorList extends React.Component {
  render() {
    return (
      <div className="contractor-list">
        A list of all the contractors as well as
        <AddContractor />
      </div>
    );
  }
}

export default ContractorList;
