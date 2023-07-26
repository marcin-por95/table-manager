export const getAllTables = state => state.tables.tables;
export const getTableById = (state, id) => state.tables.tables.find(table => table.id === id);


const UPDATE_TABLE = 'app/tables/UPDATE_TABLE';

export const updateTable = (table) => ({type: UPDATE_TABLE, payload: table});
const initialState = {
    tables: [{
        "id": "1",
        "status": "Busy",
        "peopleAmount": 2,
        "maxPeopleAmount": 4,
        "bill": 20
    },
        {
            "id": "2",
            "status": "Free",
            "peopleAmount": 0,
            "maxPeopleAmount": 3,
            "bill": 0
        },
        {
            "id": "3",
            "status": "Busy",
            "peopleAmount": 2,
            "maxPeopleAmount": 3,
            "bill": 45
        },
        {
            "id": "4",
            "status": "Cleaning",
            "peopleAmount": 0,
            "maxPeopleAmount": 3,
            "bill": 0
        }]
}

const tablesReducer = (statePart = initialState, action) => {
    switch (action.type) {
        case UPDATE_TABLE:
            return statePart.map((table) => table.id === action.payload.id ? action.payload : table);
        default:
            return statePart;
    }
};

export default tablesReducer;
