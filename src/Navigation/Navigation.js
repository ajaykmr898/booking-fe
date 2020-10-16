import React from 'react';

function Navigation (props) {
	let tab = props.tab;
	let change = props.onChange;

    const changeTabBack = () => {
        if (tab > 0) {
            change(props.tab - 1);
        }
    };

    const changeTabNext = () => {
        if (tab < 1) {
            change(props.tab + 1);
        }
    };

    return (
        <div>
            <button onClick={changeTabBack} className="back">Back</button>
            <button onClick={changeTabNext} className="next">Next</button>
        </div>
    )
}


export default Navigation;
