import React from "react";
import styled from 'styled-components'
import ColumnBlueL from "../columns/Blue/ColumnBlueL";
import ColumnBlueM from "../columns/Blue/ColumnBlueM";
import ColumnBlueS from "../columns/Blue/ColumnBlueS";
function Blockblue(){
  const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  `
  return(
    <Block>
      <ColumnBlueL/>
      <ColumnBlueM/>
      <ColumnBlueS/>
    </Block>
  )
}
export default Blockblue;