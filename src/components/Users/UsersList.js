import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = props => {
    const users = props.users || []
    return (
        <Card className={classes.users}>
            <ul>
                {users.map(user =>
                    <li>
                        {user.name} ({user.age} years old)
                </li>)}
            </ul>
        </Card>

    )
}

export default UsersList