import React from 'react'
import classes from './Card.module.css'

const Card = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className={`${classes.card} ${props.classNameJa}`}>{props.children}</div>
    )
}

export default Card