import React from "react";
import { Code } from "zlides";
import styled from "styled-components";

const CodeFromToWrapper = styled.div`
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

export const CodeFromTo = ({ from, to, ...rest }) => {
  return (
    <CodeFromToWrapper>
      <Code {...from} {...rest} />
      ⇓
      <Code {...to} {...rest} />
    </CodeFromToWrapper>
  );
};
