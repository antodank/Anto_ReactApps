import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    return (
        <div>
            <h3>This is ParentComponent</h3>
            <ChildComponent myProp = {"Hello buddy"}/>
        </div>
    )
}
