import React, { useState } from 'react'

import UseStatePrac1 from './UseStatePrac1'
import UseStatePrac2 from './UseStatePrac2'

export default function UseStatePrac() {
    
    const [toggle, setToggle] = useState(true);
 
    const handleToggle = () => {
        console.log(`toggle - ${toggle}`);
        setToggle(!toggle);
    };

    return (
        // <UseStatePrac1></UseStatePrac1>
         <UseStatePrac2 toggle={toggle} onToggle={handleToggle} />
    )
}
