import React from "react";
import styled from 'styled-components';


const colors = {
    defaultOrange: '#E87A42',
    hoverOrange: '#DF7139',
    pressedOrange: '#D1632B',
    focusedOrange: '#E87A42',
    loadingOrange: '#E87A42',
    disabledOrange: '#F0BD98',
    defaultBorder: '#DDDDDD',
    defaultTxt: '#FFFFFF',
    hoverBorder: '#717171',
    hoverTxt: '#FFFFFF',
    pressedBorder: '#414042',
    pressedTxt: '#FFFFFF',
    pressedBorder: '#414042',
    focusedTxt: '#FFFFFF',
    focusedBorder: '#F0BD98',
    loadingBorder: '#DDDDDD',
    loadingTxt: '#FFFFFF',
    disabledBorder: '#DDDDDD',
    disabledTxt: '#ffffff'
};


const Button = styled.button`
  width: 107px;
  height: 32px;
  font-family: Open-sans, sans-serif;
  font-size: 18px; 
  cursor: pointer;
  border-radius: 6px;

  ${(props) => props.variant === 'defaultOrange' && `
    background-color: ${colors.defaultOrange};
    border: ${colors.defaultBorder};
    color: ${colors.defaultTxt};
  `}

  ${(props) => props.variant === 'hoverOrange' && `
    background-color: ${colors.hoverOrange};
    border: ${colors.hoverBorder};
    color: ${colors.hoverTxt};
  `}

  ${(props) => props.variant === 'pressedOrange' && `
    background-color: ${colors.pressedOrange};
    border: ${colors.pressedBorder};
    color: ${colors.pressedTxt};
  `}

  ${(props) => props.variant === 'focusedOrange' && `
    background-color: ${colors.focusedOrange};
    border: ${colors.focusedBorder};
    color: ${colors.focusedTxt};
    border-width: 2px;
    border-style: solid;
  `}
  ${(props) => props.variant === 'loadingOrange' && `
    background-color: ${colors.loadingOrange};
    border: ${colors.loadingBorder};
    color: ${colors.loadingTxt};
  `}
  ${(props) => props.variant === 'disabledOrange' && `
    background-color: ${colors.disabledOrange};
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
