import React from "react";
import styled from 'styled-components'
import MediumButton from "../../button/MediumButtons/MediumbuttonAll";
function ColumnAllM(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <MediumButton variant="allDefault">Try it free</MediumButton>
      <MediumButton variant="allHover">Try it free</MediumButton>
      <MediumButton variant="allPressed">Try it free</MediumButton>
      <MediumButton variant="allFocused">Try it free</MediumButton>    
      <MediumButton variant="allLoading">Try it free</MediumButton>    
      <MediumButton variant="allDisabled">Try it free</MediumButton>    
    </Column>
  )
}
export default ColumnAllM;