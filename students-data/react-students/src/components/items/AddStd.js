import React from "react";
import axios from "axios";

const AddStd = ({ name, age, email, items, refStud }) => {
    const [msg, setMsg] = React.useState(null)
    const [editItem, setEditItem] = React.useState({
        name,
        age,
        email,
    });
    const inputsHandler = (e) => {
        setEditItem({
            ...editItem,
            [e.target.name]: e.target.value
        })
    }
    const addNewStdHandler = () => {
        const isExistStudent = items.find((itm) => itm.email === editItem.email)
        if ((editItem.name !== undefined) && (editItem.age !== undefined) && (editItem.age !== '') && (editItem.email !== undefined)) {
            if (!isExistStudent) {
                axios.post(`http://localhost:4001/`, editItem)
                    .then((res) => {
                        if (res.status === 200) {
                            setMsg('Student Added Succssesfully :)')
                            let list = [...items, res.data.success];
                            refStud(list);
                        }
                        else {
                            alert("Something went wrong")
                        }
                    })
            }else{
                setMsg('Student already Exist! Email in use :( Please try to Add New Student with another Email')
            }
        } else {
            setMsg('Please fill all the inputs')
        }
    }
    return <div>
        <br /> Add New Student:<br />
        <div>
            <input type='text' name={'name'} placeholder='Name..' onChange={inputsHandler} />
            <input type='number' name={'age'} placeholder='Age..' onChange={inputsHandler} />
            <input type='email' name={'email'} placeholder='Email..' onChange={inputsHandler} />
            <input type='button' value='Add' onClick={addNewStdHandler} />
        </div>
        <br />{msg ? msg : null}
    </div>
}

export default AddStd;