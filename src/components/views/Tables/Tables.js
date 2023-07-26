import React from "react";
import {useSelector} from "react-redux";
import {getAllTables} from "../../../redux/tablesReducer";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Tables = () => {
    const allTables = useSelector(getAllTables);

    return (
        <div className={"tables"}>
            {allTables.map((table) => (
                <Col xs="12" md="6" lg="4" key={table.id}>
                    <Card className="mt-4">
                        <Card.Body>
                            <Card.Title>STOL #{table.id}</Card.Title>
                            <Card.Text>
                                <b>Status: </b>
                                {table.status}
                                <br/>
                                <b>PeopleAmount: </b>
                                {table.peopleAmount}
                                <br/>
                                <b>maxPeopleAmount: </b>
                                {table.maxPeopleAmount}
                                <br/>
                                <b>bill: </b>
                                {table.bill}
                                <br/>
                            </Card.Text>
                            <Button variant="primary" as={Link} to={`/tables/${table.id}`}>
                                Show details
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>

    );
};

export default Tables;
