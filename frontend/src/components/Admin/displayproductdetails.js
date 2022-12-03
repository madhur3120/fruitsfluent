import React, { useContext, useState } from 'react'
import { Context } from 'react';
import Notecontext from '../context/notecontext';
import '../Admin/all-products.css'


const Displayproductdetail = () => {

    const a = useContext(Notecontext);

    console.log(a);

    return (
        <>
            <div className="all-products">
                <table class="dpstyled-table" >
                    <tr key={"header"} className='dptr'>
                        {Object.keys(a[0]).map((key) => (
                            <th className='dpth'>{key}</th>
                        ))}
                    </tr>

                    {a.map((item) => (
                        <tr key={item.name} className="active-row dptr" >
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default Displayproductdetail

