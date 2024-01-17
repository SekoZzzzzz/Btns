import React from "react";
import styled from 'styled-components'
import LargeButton from "../../button/LargeButtons/LargebuttonAll";

function ColumnAllL(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <LargeButton variant="allDefault">Try it free</LargeButton>
      <LargeButton variant="allHover">Try it free</LargeButton>
      <LargeButton variant="allPressed">Try it free</LargeButton>
      <LargeButton variant="allFocused">Try it free</LargeButton>    
      <LargeButton variant="allLoading">Try it free</LargeButton>    
      <LargeButton variant="allDisabled">Try it free</LargeButton>    
    </Column>
  )
}
export default ColumnAllL;