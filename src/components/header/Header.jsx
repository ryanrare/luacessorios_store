import React from 'react';
import CustomizedBreadcrumbs from './HeaderFooter';
import HeaderContainer from './HeaderContainer';




const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <HeaderContainer / >
          <CustomizedBreadcrumbs / >
        </nav>
      </div>
    </header>
  );
}

export default Header;