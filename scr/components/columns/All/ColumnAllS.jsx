import React from "react";
import styled from 'styled-components'
import SmallButton from "../../button/SmallButtons/SmallbuttonAll";
function ColumnAllS(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <SmallButton variant="allDefault">Try it free</SmallButton>
      <SmallButton variant="allHover">Try it free</SmallButton>
      <SmallButton variant="allPressed">Try it free</SmallButton>
      <SmallButton variant="allFocused">Try it free</SmallButton>    
      <SmallButton variant="allLoading">Try it free</SmallButton>    
      <SmallButton variant="allDisabled">Try it free</SmallButton>    
    </Column>
  )
}
export default ColumnAllS;