import React from "react";
import styled from 'styled-components';


const colors = {
    allDefault: '#ffffff',
    allHover: '#ffffff',
    allPressed: '#ffffff',
    allFocused: '#ffffff',
    allLoading: '#ffffff',
    allDisabled: '#ffffff',
    allTxtColor: '#000000',
    allDefaultBorder: '#DDDDDD',
    allHoverBorder: '#717171',
    allPressedBorder: '#414042',
    allFocusedBorder: '#414042',
    allLoadingBorder: '#DDDDDD',
    allDisabledBorder: '#DDDDDD',
    allDisabledTxt: '#B1B1B1'
};


const Button = styled.button`
  width: 107px;
  height: 32px;
  font-family: Open-sans, sans-serif;
  font-size: 18px; 
  cursor: pointer;
  border-radius: 6px;

  ${(props) => props.variant === 'allDefault' && `
    background-color: ${colors.allDefault};
    border: ${colors.allDefaultBorder};
    color: ${colors.allTxtColor};
    border-width: 1px;
    border-style: solid;
  `}

  ${(props) => props.variant === 'allHover' && `
    background-color: ${colors.allDefault};
    border: ${colors.allHoverBorder};
    color: ${colors.allTxtColor};
    border-width: 1px;
    border-style: solid;
  `}

  ${(props) => props.variant === 'allPressed' && `
    background-color: ${colors.allDefault};
    border: ${colors.allPressedBorder};
    color: ${colors.allTxtColor};
    border-width: 1px;
    border-style: solid;
  `}

  ${(props) => props.variant === 'allFocused' && `
    background-color: ${colors.allDefault};
    border: ${colors.allFocusedBorder};
    color: ${colors.allTxtColor};
    border-width: 2px;
    border-style: solid;
  `}
  ${(props) => props.variant === 'allLoading' && `
    background-color: ${colors.allDefault};
    border: ${colors.allLoadingBorder};
    color: ${colors.allTxtColor};
    border-width: 1px;
    border-style: solid;
  `}
  ${(props) => props.variant === 'allDisabled' && `
    background-color: ${colors.allDefault};
    border: ${colors.allDisabledBorder};
    color: ${colors.allDisabledTxt};
    border-width: 1px;
    border-style: solid;
  `}
`;

function SmallButton({ variant, children }) {
  return (
    <Button variant={variant}>
      {children}
    </Button>
  );
}

export default SmallButton;