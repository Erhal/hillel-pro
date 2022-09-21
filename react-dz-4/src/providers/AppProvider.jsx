import React, {useState} from "react";

import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    return (
        <AppContext.Provider value={{ todos, setTodos }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;