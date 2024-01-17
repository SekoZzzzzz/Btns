import React from "react";
import styled from 'styled-components'
import LargeButton from "../../button/LargeButtons/LargebuttonOrange";

function ColumnOrangeL(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <LargeButton variant="defaultOrange">Try it free</LargeButton>
      <LargeButton variant="hoverOrange">Try it free</LargeButton>
      <LargeButton variant="pressedOrange">Try it free</LargeButton>
      <LargeButton variant="focusedOrange">Try it free</LargeButton>    
      <LargeButton variant="loadingOrange">Try it free</LargeButton>    
      <LargeButton variant="disabledOrange">Try it free</LargeButton>    
    </Column>
  )
}
export default ColumnOrangeL;