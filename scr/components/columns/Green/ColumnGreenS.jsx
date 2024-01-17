import React from "react";
import styled from 'styled-components'
import SmallButton from "../../button/SmallButtons/SmallbuttonGreen";
function ColumnGreenS(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <SmallButton variant="defaultGreen">Try it free</SmallButton>
      <SmallButton variant="hoverGreen">Try it free</SmallButton>
      <SmallButton variant="pressedGreen">Try it free</SmallButton>
      <SmallButton variant="focusedGreen">Try it free</SmallButton>    
      <SmallButton variant="loadingGreen">Try it free</SmallButton>    
      <SmallButton variant="disabledGreen">Try it free</SmallButton>    
    </Column>
  )
}
export default ColumnGreenS;