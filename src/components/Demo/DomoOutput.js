const DemoOutput = (props) => {
    console.log("DemoOutput re-evaluated!");
    return <p>{props.show ? 'This is a new content' : ''}</p>
}

export default DemoOutput;