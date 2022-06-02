import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SoicalMediaIcon,
  SidebarLink,
} from "./SidebarElements";
// import Discord from '../../images/Opensea.png';

import { FaTwitter, FaDiscord } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>

          <SidebarLink
            to="story"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Roadmap
          </SidebarLink>

          <SidebarLink
            to="services"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Team
          </SidebarLink>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <div className="side-bar-menu">
              <SoicalMediaIcon
                href="https://discord.com/invite/uEDP3KYb7n"
                target="_blank"
              >
                <FaDiscord />
              </SoicalMediaIcon>

              <SoicalMediaIcon
                href="https://twitter.com/NftSnowies"
                target="_blank"
              >
                <FaTwitter />
              </SoicalMediaIcon>
            </div>
          </div>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
