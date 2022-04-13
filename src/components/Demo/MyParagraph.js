const MyParagraph = (props) => {
    console.log('MyParagraph re-evaluated!');
    return <p>{props.children}</p>;
}

export default MyParagraph;