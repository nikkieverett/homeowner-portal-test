import React, { Component } from 'react';

import ProjectInfo from './ProjectInfo';
import ContractorList from './ContractorList';

class NavigationMenu extends React.Component {
  render() {
    return (
      <div className="navigation-menu">
        Navigation, I also contain the
        <ProjectInfo />
        and
        <ContractorList />
      </div>
    );
  }
}

export default NavigationMenu;
