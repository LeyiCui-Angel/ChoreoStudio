import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import playButtonSvg from "../assets/svgs/play.svg";
const style = {
  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridTemplateRows: "62px",
  border: "solid 0.5px #D0D0D0",
  borderRadius: "10px",
};

const GridElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const circleStyle = {
  border: "2px solid white",
  borderRadius: "50%",
  borderColor: "black",
  color: "white",
  height: "12px",
  width: "12px",
};

const AddSongRow = ({ SongName, ArtistName }) => {
  return (
    <div style={style}>
      <GridElement>
        <img src={playButtonSvg} alt="Play Button Icon" />
      </GridElement>
      <GridElement
        style={{
          gridColumn: "2 / span 3",
          fontStyle: "italic",
        }}
      >
        {SongName} - {ArtistName}
      </GridElement>
      <GridElement
        style={{
          gridColumn: "8",
        }}
      >
        <div style={circleStyle}></div>
      </GridElement>
    </div>
  );
};

export default AddSongRow;
