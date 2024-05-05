

const OptionBlock  = (props) => {

    return(
        <input type="text" onChange={props.selectOption} value = {props.value} style={{width: '30px', height: '30px' ,weight: 'bold',size: '20px'}} ></input>    
    )
}

export default OptionBlock;