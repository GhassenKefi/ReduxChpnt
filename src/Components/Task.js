import React from 'react'
import { Col, FormCheck, Row,Modal,Button } from 'react-bootstrap'
import { Delete_Task, Done_Task,Edit_Task } from '../Redux/actions-types'
import { useDispatch } from 'react-redux'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'


export const Task = ({task}) => {

    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Row className='TaskLayout'>
            <Col xs='1'>
                {task.isDone ?
                    <FontAwesomeIcon icon={faCheckSquare} color="#008CBA"/>
                    :
                    <FormCheck type="checkbox" onClick={()=>dispatch({type:Done_Task,payload:task.id})}/>
                    }
            </Col>
            <Col>
            {task.Description}
            </Col>
            <Col xs='2'>
                <input type='button' value="Delete" className="Btn Delete" onClick={()=>dispatch({type:Delete_Task,payload:task.id})}/>
            </Col>
            <Col xs='2'>
            <input type='button' value="Edit" className="Btn"  onClick={handleShow}/>
            </Col>
        </Row>

        {/* * * Edit Task Modal start * * */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>{task.Description}</Modal.Title>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" className="TaskName" onChange={e => setTitle(e.target.value)} />
                    <Button variant="primary" onClick={()=>dispatch({type:Edit_Task,payload:{id:task.id,Description:title}})}>
                            Save Changes
                    </Button>
                </form>
                </Modal.Body>
            </Modal>
            {/* * * Edit Task Modal ends * * */}
        </>
    )
}
