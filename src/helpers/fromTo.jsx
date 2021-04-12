import React from "react";
import styled from "styled-components";

const FromToWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 5vh;
  & > :first-child {
    margin-bottom: 2vh;
  }
  & > :last-child {
    margin-top: 2vh;
  }
`;

const FromTo = ({ children }) => {
  children = React.Children.toArray(children);

  return (
    <FromToWrapper>
      <div>{children[0]}</div>
      <span>⇓</span>
      <div>{children[1]}</div>
    </FromToWrapper>
  );
};

export default FromTo;
