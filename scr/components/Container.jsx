import React from "react";
import Blockblack from "./blocks/BlockBlack";
import Blockblue from "./blocks/BlockBlue";
import BlockOrange from "./blocks/BlockOrange";
import BlockGreen from "./blocks/BlockGreen";
import BlockAll from "./blocks/BlockAll";

function Container(){

  return(
    <div className="container" style={{padding: `1rem`}}>
      <Blockblack/>
      <Blockblue/>
      <BlockGreen/>
      <BlockOrange/>
      <BlockAll/>
    </div>
  )
}
export default Container