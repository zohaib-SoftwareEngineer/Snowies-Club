import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
  SoicalMedia,
  SoicalMediaIcon,
} from "./NavbarElements";
import Discord from "../../images/DiscordLogo.png";
import logo from "../../images/Snowieslogo.png";
import { FaTwitter } from "react-icons/fa";
// import { _connectButtonWork } from '../../libs/utils';
// import logo from '../../images/Rowdy Raccoon.png';
const Navbar = ({ toggle, props }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <div style={{ display: "flex" }}>
              <NavLogo onClick={toggleHome} to="/">
                <img
                  style={{ width: "50%", marginTop: 15 }}
                  src={logo}
                  alt="loading"
                />
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="story"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Roadmap
                  </NavLinks>
                </NavItem>

                {/* <NavItem>
                <NavLinks
                  to="faq"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  FAQ's
                </NavLinks>
              </NavItem> */}

                <NavItem>
                  <NavLinks
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Team
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </div>
            <SoicalMedia>
              <SoicalMediaIcon
                href="https://discord.com/invite/uEDP3KYb7n"
                target="_blank"
              >
                <img
                  src={Discord}
                  style={{ width: 60, height: 44, marginTop: -12 }}
                  alt={"Opensea"}
                />
              </SoicalMediaIcon>
              <SoicalMediaIcon
                href="https://twitter.com/NftSnowies"
                target="_blank"
              >
                <FaTwitter />
              </SoicalMediaIcon>
            </SoicalMedia>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
