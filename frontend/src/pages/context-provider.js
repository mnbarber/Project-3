import React, { createContext, useState } from "react";

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
    const [characterData, setCharacterData] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);

    return (
        <AppContext.Provider
            value={{
                characterData,
                setCharacterData,
                loading,
                setLoading,
                error,
                setError
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;