const MyButton = (props) => {
    return ( 
        <button style={{backgroundColor : props.background, color: props.color}}>
            {props.buttonName}
        </button>
     );
}
 
export default MyButton;