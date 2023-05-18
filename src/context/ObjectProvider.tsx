import { FC, ReactNode, createContext, useContext } from "react"


const ObjectContext = createContext<object>({});

interface props {
    value: object,
    children: ReactNode
}

export const ObjectProvider: FC<props> = ({ value, children }) => {
    return (
        <ObjectContext.Provider value={{...value}}>
            {children}
        </ObjectContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useObjectContext<T>(): T{
    return useContext(ObjectContext) as T;
}
