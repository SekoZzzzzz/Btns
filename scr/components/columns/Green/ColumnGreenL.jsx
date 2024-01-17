import React from "react";
import styled from 'styled-components'
import LargeButton from "../../button/LargeButtons/LargebuttonGreen";

function ColumnGreenL(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <LargeButton variant="defaultGreen">Try it free</LargeButton>
      <LargeButton variant="hoverGreen">Try it free</LargeButton>
      <LargeButton variant="pressedGreen">Try it free</LargeButton>
      <LargeButton variant="focusedGreen">Try it free</LargeButton>    
      <LargeButton variant="loadingGreen">Try it free</LargeButton>    
      <LargeButton variant="disabledGreen">Try it free</LargeButton>    
    </Column>
  )
}
export default ColumnGreenL;