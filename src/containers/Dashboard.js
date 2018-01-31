import React, { Component } from 'react';

import NavigationMenu from './NavigationMenu';
import ContractorDetails from './ContractorDetails';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        I'm the dashboard! I contain the:
        <NavigationMenu />
        and the
        <ContractorDetails />
      </div>
    );
  }
}

export default Dashboard;
