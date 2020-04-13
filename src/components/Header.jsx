import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav className="navbar navbar-expand-sm navbar-primary bg-primary text-white">
            <h1 className="navbar-brand text-center">{titulo}</h1>
        </nav>
     );
}
 
export default Header;