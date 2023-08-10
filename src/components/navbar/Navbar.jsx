import './navbar.css'
import logo1 from '../../assets/logo1.png'
import menu from '../../assets/menu.png'
import cross from '../../assets/close.png'
import { useState } from 'react'

const Navbar = () => {
    const [isActive,setIsActive] = useState(true)
    const menubtn = () => {
        setIsActive(current => !current)
    }
    return(
        <div className="full-navbar">
            <div className="logo"><img src={logo1} alt="" /></div>
            <div className="menu">
                { isActive ?(
                    <button className='icon' onClick={menubtn}><img src={menu} alt="" /></button>
                    
                    )
                    :
                    (
                        <div>
                        <button className='icon' onClick={menubtn}><img src={cross} alt='' /></button>
                        <div className="sidebar">
                            <div className="navbar-details2">
                                <p>About DAO</p>
                                <p>Exchange</p>
                                <p>Analytics</p>
                                <p>Docs</p>
                                <p className='launch-app-btn3'>Launch App</p>
                            </div>
                        </div> 
                        </div> 
                    )
                }
                
                
            </div>
            <div className="navbar-details">
                
                <p>About DAO</p>
                <p>Exchange</p>
                <p>Analytics</p>
                <p>Docs</p>
                <p className='launch-app-btn'>Launch App</p>
            </div>
            
        </div>
    )
}
export default Navbar;