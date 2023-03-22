import React from 'react';
import {SidebarData} from './sidebardata';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='side'>
            <ul className='stylesidebar'>
                { SidebarData.map((value, key) => {
                    return (
                        <li key = {key} className='innerlist'
                        id={window.location.pathname === value.link ? "inState" : ""}
                        onClick={() => {window.location.pathname = value.link;}}>
                            
                            <div id='icon'>{value.icon}</div>
                            {" "}
                            <div id='title'>
                                {value.title}
                            </div>
                        </li>
                    )
                })} 
            </ul>
        </div>
    </div>
  )
}

export default Sidebar