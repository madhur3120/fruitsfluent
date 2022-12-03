import React from "react";

import Notecontext from "./notecontext";

const Notestate = (props) => {

    let user = {
        name : "#" ,
        email : "#",
        cart : []
    } 

    return (
        <Notecontext.Provider value={user}>
            {props.children}
        </Notecontext.Provider>
    )
}

export default Notestate