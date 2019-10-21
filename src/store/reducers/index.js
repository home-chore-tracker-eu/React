import * as types from "../actions";

//CHORES LIST REDUCER
const initialChoresListState = {
  chores: [],
  isFetching: false
};

export const choresListReducer = (state = initialChoresListState, action) => {
  switch (action.type) {
    case types.FETCH_CHORES_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case types.FETCH_CHORES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case types.FETCH_CHORES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

//CHORE ADDITION
const initialAddChoreState = {
  isPosting: false,
  error: ""
};

export const addChoreReducer = (state = initialAddChoreState, action) => {
  switch (action.type) {
    case types.POST_NEW_CHORE_START:
      return {
        ...state,
        isPosting: true
      };
    case types.POST_NEW_CHORE_SUCCESS:
      return {
        ...state,
        isPosting: false
      };
    case types.POST_NEW_CHORE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

//KIDS LIST FETCH
const initialkidsListState = {
  kids: [],
  isFetching: false
};

export const kidsListReducer = (state = initialkidsListState, action) => {
  switch (action.type) {
    case types.FETCH_KIDS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case types.FETCH_KIDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case types.FETCH_KIDS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

//ADDING KIDS
