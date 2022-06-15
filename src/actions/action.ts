import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "./types";

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

interface FetchTodosAction {
    type: ActionTypes.fetchTodos,
    payload: Todo[]
}

const url = "https://jsonplaceholder.typicode.com/todos"

export const fetchTodos = () => {
    return async (dispatch: Dispatch<FetchTodosAction>) => {
        const response = await axios.get<Todo[]>(url)

        dispatch({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}