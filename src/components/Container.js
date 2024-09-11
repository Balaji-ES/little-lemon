import React from 'react';

const Container = ({children}) => {

    const CONTAINER_STYLES = {
        margin: "0px 15%"
    }

    return (
        <div style={CONTAINER_STYLES}>
            {children}
        </div>
    );
};

export default Container;