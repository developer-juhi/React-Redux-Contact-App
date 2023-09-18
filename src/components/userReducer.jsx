// userReducer.js
const initialState = {
    users: [
        {
            id: Date.now(),
            email: 'juhi@gmail.com',
            password: 12345678
        },
        {
            id: Date.now(),
            email: 'juhi1@gmail.com',
            password: 12345678
        },
        {
            id: Date.now(),
            email: 'juhi2@gmail.com',
            password: 12345678
        },
    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case 'CHECK_USER':
            return {
                ...state,
                users: state.users.filter((user) => {
                    // eslint-disable-next-line no-unused-expressions
                    (user.email === action.payload?.email) && (user.password === action.payload?.password)
                }),
            };

        default:
            return state;
    }
};

export default userReducer;