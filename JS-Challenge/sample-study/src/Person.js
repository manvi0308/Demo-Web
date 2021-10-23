import React from 'react'
import Qualifications from './Qualifications'

function Person(props) {
    return (
        <div>
           <h3>Person name: {props.name}</h3> 
           <Qualifications/>
        </div>
    )
}

export default Person
