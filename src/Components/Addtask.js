import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Add_Task } from '../Redux/actions-types'


const Addtask = () => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const dispatch = useDispatch()

    return (
        <form onSubmit={handleSubmit} className="TaskForm">
            <Row>
                <Col xs="10">
                <input type="text" name="title" className="TaskName" onChange={e => setTitle(e.target.value)} />
                </Col>
                <Col xs='2'>
                <input type="submit" value="Add Task" className="AddTask Btn" onClick={()=>dispatch({type:Add_Task,payload:title})}/>
                </Col>
            </Row>
        </form>
    )
}

export default Addtask