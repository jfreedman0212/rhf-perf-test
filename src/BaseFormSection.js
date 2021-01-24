import React from 'react';

import './BaseFormSection.css';

function BaseFormSection({ header, children }) {
    return (
        <div className="BaseFormSection-container">
            <h2>{header}</h2>
            <div className="BaseFormSection-children">
                {children}
            </div>
        </div>
    );
}

export default BaseFormSection;
