import React from 'react'

function Bound( props) {
    return (
        
            <div className={props.className} onClick={props.onClick}>{props.state}</div>
        
    )
}

export default Bound;
