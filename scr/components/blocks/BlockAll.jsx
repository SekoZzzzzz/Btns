import React from "react";
import styled from 'styled-components'
import ColumnAllL from "../columns/All/ColumnAllL";
import ColumnAllM from "../columns/All/ColumnAllM";
import ColumnAllS from "../columns/All/ColumnAllS";

function BlockAll(){
  const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  `
  return(
    <Block>
      <ColumnAllL/>
      <ColumnAllM/>
      <ColumnAllS/>
    </Block>
  )
}
export default BlockAll;