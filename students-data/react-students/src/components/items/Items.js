import React from "react";
import axios from "axios";
import Item from "./Item";
import AddStd from "./AddStd";
const Items = () => {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        axios.get(`http://localhost:4001/`).then((res) => {
            if (res.status === 200) {
                setItems(res.data);
            }
        });
    }, [])

    const deleteHandler = (id) => {
        let copyItems = items.filter((item) => {
            return item._id !== id
        })
        setItems(copyItems)
    }
    const addNewStdHandler = (studs) => {
        setItems(studs)
    }
    return (
        <div>
            {
                items ? items.map((item) => {
                    return <Item key={item._id} name={item.name} age={item.age} email={item.email} _id={item._id}
                                 deleteItem={deleteHandler}/>
                }): <div>Loading...</div>
            }
            {
               items ? <AddStd items={items} refStud={addNewStdHandler}/> : <div>Loading...</div>
            }
        </div>
    )

}

export default Items;