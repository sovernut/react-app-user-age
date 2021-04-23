import React, {useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'


const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(username,age)
    }

    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }

    return (
        <Card classNameJa={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input onChange={onChangeUsername} id="username" type="text"/>
                <label htmlFor="age">Age (years)</label>
                <input onChange={onChangeAge} id="age" type="number"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser