import { useState } from "react";

const Buttons = ({ btnName, onClick }) => {
  const [getBtnName, setBtnName] = useState(btnName);

  const handleClick = () => {
    
    if(btnName != "About Me"){
      setBtnName("Opening...");
    }
    if (onClick) {
      onClick(); 
    }
  };

  return <button onClick={handleClick}>{getBtnName}</button>;
};

export default Buttons;
