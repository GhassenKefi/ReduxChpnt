import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Filter = ({handleFilter }) => {

    const handleFilterAll = ()=>{
        handleFilter("All")
    }

    const handleFilterDone = ()=>{
        handleFilter("Done")
    }

    const handleFilternot = ()=>{
        handleFilter("Not")
    }

    return (
        <Row>
            <Col ms='4'>
            <input type="submit" value="All Tasks" className="Btn" onClick={handleFilterAll}/>
            </Col>
            <Col ms='4'>
            <input type="submit" value="Completed" className="Btn" onClick={handleFilterDone}/>
            </Col>
            <Col ms='4'>
            <input type="submit" value="Uncompleted" className="Btn" onClick={handleFilternot}/>
            </Col>
        </Row>
    )
}

export default Filter
