import React from 'react';

const OwlItem = ({imgsrc}) => {
    return (
        <div className="owlitem">
            <img src={imgsrc}/>
            <img src={imgsrc}/>
        </div>
    );
};

export default OwlItem;