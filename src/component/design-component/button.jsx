import { useState } from "react";


const Buttons = (props) => {
    const [getBtnName, setBtnName] = useState(props.btnName)
    return(
        <>
            <button onClick={()=>setBtnName("Opening...")}>{getBtnName}</button>
        </>
    )
}

export default Buttons