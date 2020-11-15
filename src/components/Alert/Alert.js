import React from "react";
import styled from "styled-components";

const AlertDiv = styled.div`
  background-color: #f3491b;
  color: #fff;
  height: 30px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Alert() {
  return (
    <AlertDiv>
      <p>Contact already exist!</p>
    </AlertDiv>
  );
}
