import React from "react";
import styled from 'styled-components'
import ColumnGreenL from "../columns/Green/ColumnGreenL";
import ColumnGreenM from "../columns/Green/ColumnGreenM";
import ColumnGreenS from "../columns/Green/ColumnGreenS";
function BlockGreen(){
  const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  `
  return(
    <Block>
      <ColumnGreenL/>
      <ColumnGreenM/>
      <ColumnGreenS/>
    </Block>
  )
}
export default BlockGreen;