import React, {useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'


const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return
        }
        if (+age < 1){
            return
        }
        console.log(username,age)
        setUsername('')
        setAge('')
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
                <input onChange={onChangeUsername} id="username" type="text" value={username}/>
                <label htmlFor="age">Age (years)</label>
                <input onChange={onChangeAge} id="age" type="number" value={age}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser