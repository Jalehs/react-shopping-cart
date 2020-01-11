import React from 'react';

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
    </header>
)
   
Header.defaultProps = {
    title: 'Shopping Spree'
}            
       
  
export default Header;