import React from "react";
import styled from 'styled-components'
import MediumButton from "../../button/MediumButtons/MediumbuttonOrange";

function ColumnOrangeM(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <MediumButton variant="defaultOrange">Try it free</MediumButton>
      <MediumButton variant="hoverOrange">Try it free</MediumButton>
      <MediumButton variant="pressedOrange">Try it free</MediumButton>
      <MediumButton variant="focusedOrange">Try it free</MediumButton>    
      <MediumButton variant="loadingOrange">Try it free</MediumButton>    
      <MediumButton variant="disabledOrange">Try it free</MediumButton>    
    </Column>
  )
}
export default ColumnOrangeM;