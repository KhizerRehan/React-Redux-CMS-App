import React from 'react';
import { render } from 'react-dom';

function Hi(){
    return (
        <React.Fragment>
            <div>
                Aute pariatur est qui pariatur Lorem est commodo aliquip officia.
            </div>
        </React.Fragment>
    )
}

render(<Hi />, document.getElementById('app'));