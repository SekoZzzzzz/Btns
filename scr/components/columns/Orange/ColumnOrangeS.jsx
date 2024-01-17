import React from "react";
import styled from 'styled-components'
import SmallButton from "../../button/SmallButtons/SmallbuttonOrange";
function ColumnOrangeS(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <SmallButton variant="defaultOrange">Try it free</SmallButton>
      <SmallButton variant="hoverOrange">Try it free</SmallButton>
      <SmallButton variant="pressedOrange">Try it free</SmallButton>
      <SmallButton variant="focusedOrange">Try it free</SmallButton>    
      <SmallButton variant="loadingOrange">Try it free</SmallButton>    
      <SmallButton variant="disabledOrange">Try it free</SmallButton>    
    </Column>
  )
}
export default ColumnOrangeS;