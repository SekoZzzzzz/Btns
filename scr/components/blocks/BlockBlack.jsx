import React from "react";
import styled from 'styled-components'
import ColumnBlackL from "../columns/Black/ColumnBlackL";
import ColumnBlackM from "../columns/Black/ColumnBlackM";
import ColumnBlackS from "../columns/Black/ColumnBlackS";
function Blockblack(){
  const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  `
  return(
    <Block>
      <ColumnBlackL/>
      <ColumnBlackM/>
      <ColumnBlackS/>
    </Block>
  )
}
export default Blockblack;