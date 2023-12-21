export default function About(props){
    return(
        <div style={{color:props.colors==="dark"?"white":"black"}}>

          <h1 style={{height:"50px"}}>About Us</h1>
           <div style={{fontWeight:"500",fontSize:20}}> <ul>
            <li>Text Crafty is a Text Enhancer,Word Counter</li>
            <li>Text Crafty gives you a way to analyze your text quickly and efficiently </li>
            <li>Text Crafty helps to enhance any text</li>
            <li>Text Crafty lets you remove unwanted spaces between your words </li>
            <li>Text Crafty is free to use </li>
            </ul></div>
            
        </div>
    )
}