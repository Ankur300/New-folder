import React, { useReducer } from 'react';
const initialState = { react: false, graphql: false, angular: false };
const coursesReducer = (state, action) => {
    switch (action.type) {
        case "REACT":
            return { react: true, graphql: false, angular: false };
            break;
        case "GRAPHQL":
            return { graphql: true, react: false, angular: false };
            break;
        case "ANGULAR":
            return { angular: true, graphql: false, react: false };
        default:
            throw new Error();
    }
}

export default function Learn() {
    const [state, dispatch] = useReducer(coursesReducer, initialState);
    const handleReactPress = () => {
        dispatch({ type: "REACT" });
    }
    const handlegGraphqlPress = () => {
        dispatch({ type: "GRAPHQL" });
    }
    const handleAngularPress = () => {
        dispatch({ type: "ANGULAR" });
    }
    return (
        <div>
            <h2>Use Reducer Example Component</h2>
            <p>Learning {
                state.react ? "React" : state.graphql ? "Graphql" : state.angular ? "Angular" : "Not Started"
            }</p>
            <button onClick={handleReactPress}>React</button>
            <button onClick={handlegGraphqlPress}>Graphql</button>
            <button onClick={handleAngularPress}>Angular</button>
        </div>
    )
}
