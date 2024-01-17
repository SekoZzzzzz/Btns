import React from "react";
import styled from 'styled-components';


const colors = {
  defaultGreen: '#89AA86',
  hoverGreen: '#799A76',
  pressedGreen: '#6F906C',
  focusedGreen: '#89AA86',
  loadingGreen: '#89AA86',
  disabledGreen: '#C6E0C3',
  defaultBorder: '#DDDDDD',
  defaultTxt: '#FFFFFF',
  hoverBorder: '#717171',
  hoverTxt: '#FFFFFF',
  pressedBorder: '#414042',
  pressedTxt: '#FFFFFF',
  pressedBorder: '#414042',
  focusedTxt: '#FFFFFF',
  focusedBorder: '#C6E0C3',
  loadingBorder: '#DDDDDD',
  loadingTxt: '#FFFFFF',
  disabledBorder: '#DDDDDD',
  disabledTxt: '#ffffff'
};


const Button = styled.button`
  width: 107px;
  height: 40px;
  font-family: Open-sans, sans-serif;
  font-size: 18px; 
  cursor: pointer;
  border-radius: 6px;

  ${(props) => props.variant === 'defaultGreen' && `
    background-color: ${colors.defaultGreen};
    border: ${colors.defaultBorder};
    color: ${colors.defaultTxt};
  `}

  ${(props) => props.variant === 'hoverGreen' && `
    background-color: ${colors.hoverGreen};
    border: ${colors.hoverBorder};
    color: ${colors.hoverTxt};
  `}

  ${(props) => props.variant === 'pressedGreen' && `
    background-color: ${colors.pressedGreen};
    border: ${colors.pressedBorder};
    color: ${colors.pressedTxt};
  `}

  ${(props) => props.variant === 'focusedGreen' && `
    background-color: ${colors.focusedGreen};
    border: ${colors.focusedBorder};
    color: ${colors.focusedTxt};
    border-width: 2px;
    border-style: solid;
  `}
  ${(props) => props.variant === 'loadingGreen' && `
    background-color: ${colors.loadingGreen};
    border: ${colors.loadingBorder};
    color: ${colors.loadingTxt};
  `}
  ${(props) => props.variant === 'disabledGreen' && `
    background-color: ${colors.disabledGreen};
    border: ${colors.disabledBorder};
    color: ${colors.disabledTxt};
  `}
`;

function MediumButton({ variant, children }) {
  return (
    <Button variant={variant}>
      {children}
    </Button>
  );
}

export default MediumButton;