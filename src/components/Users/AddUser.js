import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'
import Wrapper from '../Helpers/Wrapper'


const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if (+age < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age (>0))'
            })
            return
        }
        console.log(username, age)
        props.onAddUser(username, age, Math.random().toString())
        setUsername('')
        setAge('')
    }

    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} confirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input onChange={onChangeUsername} id="username" type="text" value={username} />
                    <label htmlFor="age">Age (years)</label>
                    <input onChange={onChangeAge} id="age" type="number" value={age} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser