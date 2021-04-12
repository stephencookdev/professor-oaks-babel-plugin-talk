import React from "react";
import { HighlightList, Slide, Step, Code } from "zlides";
import styled from "styled-components";

import FromTo from "../helpers/fromTo";
import AstPre from "../assets/AstPre";
import AstPost from "../assets/AstPost";

import mrMimeLimits from "../assets/mr-mime-limits.gif";
import eevee from "../assets/eevee.gif";

const PTGGroup = styled.div`
  display: flex;
`;
const PTGItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 10vw;
  border: 1px solid currentColor;
  font-size: 1.5vw;
  padding: 1vw 0;
  opacity: ${(props) => (props.active || props.highActive ? 1 : 0.5)};
  text-decoration: ${(props) => (props.highActive ? "underline" : "none")};
  transform: scale(${(props) => (props.highActive ? "1.15" : "1")});
  transition: 0.5s ease opacity, 0.5s ease transform;

  &:not(:last-child) {
    margin-right: 1vw;
  }
`;
const Stamp = styled.div`
  position: absolute;
  color: #a33;
  text-transform: uppercase;
  font-size: 2.5vw;
  transform: rotate(20deg);
  font-weight: 900;
  text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 2px #000,
    -1px -1px 2px #000;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`;
const GridFill = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const PokeTransform = styled.div`
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: white;
    opacity: 0;
    animation: fade-to-white-late 0.51s ease;
    animation-delay: 4.5s;
  }

  & > :first-child {
    animation: fade-to-white 3s ease;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    left: 0;
    top: 0;
  }

  & > :last-child {
    animation: fade-from-white 3s ease;
    animation-delay: 5s;
    animation-fill-mode: forwards;
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
  }

  @keyframes fade-to-white-late {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1.6);
    }
  }

  @keyframes fade-to-white {
    0% {
      fill: currentColor;
      filter: none;
    }
    99% {
      fill: white;
      filter: drop-shadow(5px 5px 4px white) drop-shadow(-5px -5px 4px white)
        drop-shadow(5px -5px 4px white) drop-shadow(-5px 5px 4px white);
      opacity: 1;
      position: relative;
    }
    100% {
      position: absolute;
      opacity: 0;
    }
  }

  @keyframes fade-from-white {
    0% {
      position: relative;
      opacity: 1;
      fill: white;
      filter: drop-shadow(5px 5px 4px white) drop-shadow(-5px -5px 4px white)
        drop-shadow(5px -5px 4px white) drop-shadow(-5px 5px 4px white);
    }
    100% {
      position: relative;
      opacity: 1;
      fill: currentColor;
      filter: none;
    }
  }
`;

const parseExample = `const x = <div />`;
const parseExampleTranspiled = `const x = React.createElement('div')`;

export default () => (
  <Slide>
    <h1>Plugin Limitations</h1>

    <div className="centerWithHeader sidebyside">
      <HighlightList
        items={[
          "There are limits",
          { text: "3 stages of transpilation", count: 5 },
          { text: "Plugins control AST transforms", count: 2 },
        ]}
      />

      <div
        className="fixedImageContainer"
        style={{
          width: "50vw",
          marginLeft: "5vw",
          justifyContent: "flex-start",
        }}
      >
        <Step step={1}>
          <img src={mrMimeLimits} />
        </Step>

        <Step step="2-">
          {(step) => (
            <Grid>
              <PTGGroup>
                <PTGItem active={step === 2 || step === 4}>Parse</PTGItem>
                <PTGItem
                  active={step === 2 || step === 5}
                  highActive={step > 6}
                >
                  Transform
                  {step === 5 && <Stamp>Evolve</Stamp>}
                </PTGItem>
                <PTGItem active={step === 2 || step === 6}>Generate</PTGItem>
              </PTGGroup>

              <GridFill>
                <Step step="3-6" iterate>
                  <Code
                    value={parseExample}
                    codeMirrorOptions={{ mode: "javascript" }}
                  />

                  <FromTo>
                    <Code
                      value={parseExample}
                      codeMirrorOptions={{ mode: "javascript" }}
                    />
                    <AstPre />
                  </FromTo>

                  <PokeTransform>
                    <AstPre />
                    <AstPost />
                  </PokeTransform>

                  <FromTo>
                    <AstPost />
                    <Code
                      value={parseExampleTranspiled}
                      codeMirrorOptions={{ mode: "javascript" }}
                    />
                  </FromTo>
                </Step>

                <Step step="8">
                  <img src={eevee} />
                </Step>
              </GridFill>
            </Grid>
          )}
        </Step>
      </div>
    </div>
  </Slide>
);
