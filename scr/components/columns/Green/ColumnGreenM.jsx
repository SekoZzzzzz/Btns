import React from "react";
import styled from 'styled-components'
import MediumButton from "../../button/MediumButtons/MediumbuttonGreen";

function ColumnGreenM(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <MediumButton variant="defaultGreen">Try it free</MediumButton>
      <MediumButton variant="hoverGreen">Try it free</MediumButton>
      <MediumButton variant="pressedGreen">Try it free</MediumButton>
      <MediumButton variant="focusedGreen">Try it free</MediumButton>    
      <MediumButton variant="loadingGreen">Try it free</MediumButton>    
      <MediumButton variant="disabledGreen">Try it free</MediumButton>    
    </Column>
  )
}
export default ColumnGreenM;