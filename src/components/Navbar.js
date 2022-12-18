import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
import projectsSvg from "../assets/svgs/projects.svg";
import inspirationSvg from "../assets/svgs/inspiration.svg";
import allFilesSvg from "../assets/svgs/files.svg";

const NavbarWrapper = styled.div`
  max-width: 768px;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: #d9d9d9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Navbar = ({ activeTab }) => {
  return (
    <NavbarWrapper>
      <Tab
        svg={projectsSvg}
        altTag="projects icon"
        title="projects"
        isActiveTab={activeTab === "projects"}
      />
      <Tab
        svg={inspirationSvg}
        altTag="inspiration icon"
        title="inspiration"
        isActiveTab={activeTab === "inspiration"}
      />
      <Tab
        svg={allFilesSvg}
        altTag="all files icon"
        title="all files"
        isActiveTab={activeTab === "all files"}
      />
      {/* <Tab
        svg={settingsSvg}
        altTag="settings icon"
        title="settings"
        isActiveTab={activeTab === "settings"}
      /> */}
    </NavbarWrapper>
  );
};

export default Navbar;
