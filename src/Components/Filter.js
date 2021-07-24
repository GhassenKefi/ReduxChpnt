import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Filter = ({tasks,handleFilter }) => {

    const handleFilterAll = ()=>{
        handleFilter(tasks)
    }

    const handleFilterDone = ()=>{
        handleFilter(tasks.filter(e=>e.isDone))
    }

    const handleFilternot = ()=>{
        handleFilter(tasks.filter(e=>!e.isDone))
    }

    return (
        <Row>
            <Col ms='4'>
            <input type="submit" value="All" className="Btn" onClick={handleFilterAll}/>
            </Col>
            <Col ms='4'>
            <input type="submit" value="Completed" className="Btn" onClick={handleFilterDone}/>
            </Col>
            <Col ms='4'>
            <input type="submit" value="Active" className="Btn" onClick={handleFilternot}/>
            </Col>
        </Row>
    )
}

export default Filter
