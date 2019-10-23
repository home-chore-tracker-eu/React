import { combineReducers } from "redux";
import * as types from "../actions";

//CHORES REDUCER
const initialChores = {
  chores: [],
  isFetching: false,
  isDeleting: false,
  isPosting: false,
  isPutting: false,
  error: ""
};

export const choresReducer = (state = initialChores, action) => {
  switch (action.type) {
    case types.FETCH_CHORES_START:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_CHORES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        chores: action.payload
      };
    case types.FETCH_CHORES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case types.POST_NEW_CHORE_START:
      return {
        ...state,
        isPosting: true,
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

    case types.DELETE_CHORE_START:
      return {
        ...state,
        isDeleting: true,
      };
    case types.DELETE_CHORE_SUCCESS:
      return {
        ...state,
        isDeleting: false
      };
    case types.DELETE_CHORE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

//CHILDREN REDUCER
const initialChildren = {
  children: [],
  isFetching: false,
  isDeleting: false,
  isPosting: false,
  isPutting: false,
  error: ""
};

export const childrenReducer = (state = initialChildren, action) => {
  switch (action.type) {
    case types.FETCH_CHILDREN_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case types.FETCH_CHILDREN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        children: action.payload
      };
    case types.FETCH_CHILDREN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case types.POST_NEW_CHILD_START:
      return {
        ...state,
        isPosting: true,
        error: ""
      };
    case types.POST_NEW_CHILD_SUCCESS:
      return {
        ...state,
        isPosting: false
      };
    case types.POST_NEW_CHILD_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case types.DELETE_CHILD_START:
      return {
        ...state,
        isDeleting: true,
        error: ""
      };
    case types.DELETE_CHILD_SUCCESS:
      return {
        ...state,
        isDeleting: false
      };
    case types.DELETE_CHILD_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

//FAMILIES REDUCER
const initialFamilies = {
  families: [],
  isFetching: false,
  isDeleting: false,
  isPosting: false,
  isPutting: false,
  error: ""
};

export const familiesReducer = (state = initialFamilies, action) => {
  switch (action.type) {
    case types.FETCH_FAMILIES_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case types.FETCH_FAMILIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        families: action.payload
      };
    case types.FETCH_FAMILIES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case types.POST_NEW_FAMILY_START:
      return {
        ...state,
        isPosting: true,
        error: ""
      };
    case types.POST_NEW_FAMILY_SUCCESS:
      return {
        ...state,
        isPosting: false,
        families: action.payload
      };
    case types.POST_NEW_FAMILY_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case types.DELETE_FAMILY_START:
      return {
        ...state,
        isDeleting: true,
        error: ""
      };
    case types.DELETE_FAMILY_SUCCESS:
      return {
        ...state,
        isDeleting: false
      };
    case types.DELETE_FAMILY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  chores: choresReducer,
  children: childrenReducer,
  families: familiesReducer
});
