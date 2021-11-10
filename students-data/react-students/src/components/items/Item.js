import React from "react";
import axios from "axios";

const Item = ({ name, _id, age, email, deleteItem }) => {
    const [item] = React.useState({
        name,
        age,
        email,
        _id,
    });

    const deleteHandler = () => {
        axios.delete(`http://localhost:4001/delete/${item._id}`)
            .then((res) => {
                if (res.status === 200) {
                    deleteItem(item._id)
                }
                else {
                    alert("Something went wrong")
                }
            })
    }

    return (
            <div>
                name : {item.name} , age : {item.age} , email : {item.email} <input type={'button'} value={'delete'} onClick={deleteHandler} />
            </div>
    )
}

export default Item;