import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput re-evaluated!");
    return <MyParagraph>{props.show ? 'This is a new content' : ''}</MyParagraph>;
}

export default React.memo(DemoOutput);