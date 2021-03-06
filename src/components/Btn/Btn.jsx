import React,{useState} from 'react';
import buttonStyles from "./button.module.scss";
import cx from "classnames";
 
const Btn = (props) => {

    const main = {
      backgroundColor: props.mainColor || "#06DDDD",
      color:"white",
      padding: props.padding || "1rem 3rem",
      fontSize: props.fontSize || "24px",
      borderRadius: props.borderRadius || "0px",
      border: props.border || "0px solid #06DDDD",
      fontFamily: props.fontFamily || "Fira Sans, sans-serif"
    };
    const hover = {
      color: props.hoverColor || props.mainColor || "#06DDDD",
      padding: props.padding || "1rem 3rem",
      fontSize: props.fontSize || "24px",
      borderRadius: props.borderRadius || "0px",
      border: props.border || "0px solid #06DDDD",
      fontFamily: props.fontFamily || "Fira Sans, sans-serif"
    }
    // const classBtn = 
    const [style, setStyle] = useState(main);
  
      return (props.type==="secondary") ? (
          <button className={cx(buttonStyles.btn,buttonStyles.btnSecondary)} style={style}            
            onMouseEnter={()=>setStyle(hover)} 
            onMouseLeave={()=>setStyle(main)}>    
                {props.children}
          </button>
        ):(
          <button className={cx(buttonStyles.btn,buttonStyles.btnMain)} style={style}            
            onMouseEnter={()=>setStyle(hover)} 
            onMouseLeave={()=>setStyle(main)}>    
                {props.children}
          </button>
        );
  }
   
  export default Btn;