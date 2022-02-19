import React, { useState } from "react";
import ListCom from "./ListCom";
import { FaPrescriptionBottleAlt } from "react-icons/fa";

const TodoComponent = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);
    const current = new Date();
    let day;
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const itemEvent = (event) => {
        setItem(event.target.value);
    };
    switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
        }
    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item];
        });
        setItem("");
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h6> ToDo List </h6> <br />
                    <div className="date"></div>
                    <p>{day}</p>
                    <p>{date}</p>
                    <hr />
                    <input type="text" required value={item} placeholder="Add an Items" onChange={itemEvent} />
                    <button className="addbtn" onClick={listOfItems}>
                     <FaPrescriptionBottleAlt/>
                    </button>
                    <br />
                    <ol> {newitem.map((val, index) => {
                        return <ListCom key={index} text={val} />;
                    })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    )
}

export default TodoComponent