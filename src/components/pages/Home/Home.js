import { Col, Row,  } from "react-bootstrap";
import React from 'react';
import Tables from "../../views/Tables/Tables";

const Home = () => {
    return (
        <>
            <Row>
                <Col className='d-flex justify-content-between'>
                    <h1>All Tables</h1>

                </Col>
            </Row>
            <Tables />
        </>
    )
}

export default Home;
