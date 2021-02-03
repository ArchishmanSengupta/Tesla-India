import React from 'react' ;
import "./SideDrawer.css" ;
import { Divider } from '@material-ui/core'; 
import ClearIcon from '@material-ui/icons/Clear';

function SideDrawer({click}) {
    return (
        <nav className="side__drawer">
            <div className="close__btn" onClick={click}>
                <ClearIcon/>
            </div>
            <ul>
                
                <li><a href="/">MODEL S</a></li>
                
                <Divider className="divider" component="li" variant="middle" />
                <li><a href="/">MODEL 3</a></li>
                <Divider className="divider" variant="middle" component="li" />
                <li><a href="/">MODEL X</a></li>
                <Divider className="divider" variant="middle" component="li" />
                <li><a href="/">MODEL Y</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">SOLAR ROOF</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">SOLAR PANEL</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                
                <li><a href="/">EXISTING INVENTORY</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">USED INVENTORY</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">TRADE IN</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">CYBERTRUCK</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">ROADSTER</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">SEMI</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">CHARGING</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">POWERWALL</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">COMMERCIAL SOLAR</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">TESTDRIVE</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">FIND US</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">SUPPORT</a></li>
                <Divider className="divider" variant="middle" component="li"/>
                <li><a href="/">INDIA</a></li>
                <Divider className="divider" variant="middle" component="li"/>


                
            </ul>
        </nav>
    )
}

export default SideDrawer
