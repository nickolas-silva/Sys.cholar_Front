import { FC, ReactNode, createContext, useContext, useReducer } from "react"



interface ContextType {
    state: number[],
    dispatch: React.Dispatch<action>
}

const IdContext = createContext<ContextType>({ state: [], dispatch: null });

interface props {
    children: ReactNode
}

interface action {
    type: 'add' | 'remove',
    value: number
}

function reducer(state: number[], action: action): number[] {
    if (state === undefined) {
        return [];
    }
    console.log(action.value)
    switch (action.type) {
        case 'add': {
            if (!state.includes(action.value)) {
                return [...state, action.value];
            }
            break;
        }
        case "remove": {
            if (state.includes(action.value)) {
                return state.filter(num => num !== action.value);
            }
            break;
        }
        default:
            return state;

    }
    return state;
}

export const IdProvider: FC<props> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, []);


    return (
        <IdContext.Provider value={{ state, dispatch }}>
            {children}
        </IdContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useIdContext = (): ContextType => {
    return useContext(IdContext);
};
