import React from 'react';
import HeaderFooter from './HeaderFooter';
import HeaderContainer from './HeaderContainer';


const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <HeaderContainer / >
          <HeaderFooter / >
        </nav>
      </div>
    </header>
  );
}

export default Header;