import React from 'react';
import './header.css';
import { handleLoginWithGoogle, handleLogout } from './auther';

export const HeaderComponent: React.FC = () => {

    return (
        <header>
            <p>neet!</p>
            <button className='google-button' onClick={handleLoginWithGoogle}>Login with Google</button>
        </header>
    );
};
