export default function Alert(props){
    const capitalize=(data)=>{
        var lower=data.charAt(0).toUpperCase()+data.slice(1)    
        return(lower)
    }
    return(
        <div style={{height:"30px"}}>
       {props.alert&&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>} 
            </div>
        
    )
}