import {Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from 'react';
import {getTableById, updateTable} from "../../../redux/tablesReducer";
const Table = () => {
    const {id} = useParams()
    const tableData = useSelector(state => getTableById(state, id));

    const dispatch = useDispatch();

    const onUpdateClick = () => {
        dispatch(updateTable(id));
    }

    if (!tableData) {
        return <Navigate to="/"/>
    }
    return (
        <>
            <b>STOL: </b>
            {tableData.id}
            <br/>
            <b>Status: </b>
            {tableData.status}
            <br/>
            <b>PeopleAmount: </b>
            {tableData.peopleAmount}
            <br/>
            <b>maxPeopleAmount: </b>
            {tableData.maxPeopleAmount}
            <br/>
            <b>bill: </b>
            {tableData.bill}
            <br/>
        </>
    )
}
export default Table;
