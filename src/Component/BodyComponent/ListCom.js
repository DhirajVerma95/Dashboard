import React, { useState } from "react";
import { RiDeleteBin5Line} from "react-icons/ri";
const ListCom = (props) => {
const [line, setLine] = useState(false);
const cutIt = () => {
 setLine(true);
};
return (
 <div className="todo_style">
<span onClick={cutIt}>
    <div className="delbtn">
    <RiDeleteBin5Line/>
    </div>
</span>
<li style={{ textDecoration: line ? "line-through" : "none" }}>
{props.text}
</li>
</div>
);
};
export default ListCom;