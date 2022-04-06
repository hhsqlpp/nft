import React, { FC } from 'react';
import { Products } from './components';
import './index.scss';

const App: FC = () => {
    return (
        <div className='main'>
            <div className='container'>
                <Products />
            </div>
        </div>
    );
};

export default App;
