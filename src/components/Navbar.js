import React, {useState} from "react";
import { Icon } from "@iconify/react";
import "./css/navbar.css";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
function Navbar() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const linkClassName = `link ${isHovered ? 'cover' : ''}`;
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-3">
        <div className="searchBox">
          <input
            placeholder="Search business..."
            type="search"
            className="p-1 ps-3 rounded-4 border-3"
          />
        </div>
        <Link to={'/'}>
        <div className="logo mx-2"><img src={logo} alt="logo" className="img-fluid"/></div>
        </Link>
        <button className="createCampaign btn d-flex align-items-center rounded-4 border-3">
          <Link to={"/AddBusiness"} style={{textDecoration:"none",color:"white"}}>
          List a business &nbsp;
          <Icon icon="material-symbols:campaign-rounded" />
          </Link>
        </button>
      </div>
      <div className="sidebar rounded-4 p-3 d-flex flex-column gap-5 align-items-center justify-content-center">
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}><div className={linkClassName}><Icon icon="ep:menu" /></div></Link>
        <Link to={'/AddBusiness'} style={{textDecoration:"none",color:"white"}}><div className={linkClassName}><Icon icon="ic:twotone-campaign" /></div></Link>
        <div className={linkClassName}><Icon icon="carbon:money" /></div>
        <div className={linkClassName}><Icon icon="solar:card-broken" /></div>
        <div className={linkClassName}><Icon icon="iconoir:profile-circle" /></div>
        <div className={linkClassName}><Icon icon="fluent:arrow-exit-20-filled" /></div>
      </div>
    </>
  );
}

export default Navbar;
