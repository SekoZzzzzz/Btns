import React from "react";
import styled from 'styled-components'
import ColumnOrangeL from "../columns/Orange/ColumnOrangeL";
import ColumnOrangeM from "../columns/Orange/ColumnOrangeM";
import ColumnOrangeS from "../columns/Orange/ColumnOrangeS";
function BlockOrange(){
  const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  `
  return(
    <Block>
      <ColumnOrangeL/>
      <ColumnOrangeM/>
      <ColumnOrangeS/>
    </Block>
  )
}
export default BlockOrange;