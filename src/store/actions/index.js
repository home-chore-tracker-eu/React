import axios from "axios";

//ACTION TYPES
export const FETCH_CHORES_START = "FETCH_CHORES_START";
export const FETCH_CHORES_SUCCESS = "FETCH_CHORES_SUCCESS";
export const FETCH_CHORES_FAILURE = "FETCH_CHORES_FAILURE";

export const POST_NEW_CHORE_START = "POST_NEW_CHORE_START";
export const POST_NEW_CHORE_SUCCESS = "POST_NEW_CHORE_SUCCESS";
export const POST_NEW_CHORE_FAILURE = "POST_NEW_CHORE_FAILURE";

export const EDIT_CHORE_START = "EDIT_CHORE_START";
export const EDIT_CHORE_SUCCESS = "EDIT_CHORE_SUCCESS";
export const EDIT_CHORE_FAILURE = "EDIT_CHORE_FAILURE";

export const DELETE_CHORE_START = "DELETE_CHORE_START";
export const DELETE_CHORE_SUCCESS = "DELETE_CHORE_SUCCESS";
export const DELETE_CHORE_FAILURE = "DELETE_CHORE_FAILURE";

export const FETCH_CHILDREN_START = "FETCH_CHILDREN_START";
export const FETCH_CHILDREN_SUCCESS = "FETCH_CHILDREN_SUCCESS";
export const FETCH_CHILDREN_FAILURE = "FETCH_CHILDREN_FAILURE";

export const POST_NEW_CHILD_START = "POST_NEW_CHILD_START";
export const POST_NEW_CHILD_SUCCESS = "POST_NEW_CHILD_SUCCESS";
export const POST_NEW_CHILD_FAILURE = "POST_NEW_CHILD_FAILURE";

export const EDIT_CHILD_START = "EDIT_CHILD_START";
export const EDIT_CHILD_SUCCESS = "EDIT_CHILD_SUCCESS";
export const EDIT_CHILD_FAILURE = "EDIT_CHILD_FAILURE";

export const DELETE_CHILD_START = "DELETE_CHILD_START";
export const DELETE_CHILD_SUCCESS = "DELETE_CHILD_SUCCESS";
export const DELETE_CHILD_FAILURE = "DELETE_CHILD_FAILURE";

export const FETCH_FAMILIES_START = "FETCH_FAMILIES_START";
export const FETCH_FAMILIES_SUCCESS = "FETCH_FAMILIES_SUCCESS";
export const FETCH_FAMILIES_FAILURE = "FETCH_FAMILIES_FAILURE";

export const POST_NEW_FAMILY_START = "POST_NEW_FAMILY_START";
export const POST_NEW_FAMILY_SUCCESS = "POST_NEW_FAMILY_SUCCESS";
export const POST_NEW_FAMILY_FAILURE = "POST_NEW_FAMILY_FAILURE";

export const EDIT_FAMILY_START = "EDIT_FAMILY_START";
export const EDIT_FAMILY_SUCCESS = "EDIT_FAMILY_SUCCESS";
export const EDIT_FAMILY_FAILURE = "EDIT_FAMILY_FAILURE";

export const DELETE_FAMILY_START = "DELETE_FAMILY_START";
export const DELETE_FAMILY_SUCCESS = "DELETE_FAMILY_SUCCESS";
export const DELETE_FAMILY_FAILURE = "DELETE_FAMILY_FAILURE";



//ACTION CREATORS
//CHORES
export const fetchChores = () => dispatch => {
  dispatch({ type: FETCH_CHORES_START });
  axios
    .get(`home-chore-tracker.herokuapp.com/api/chores`)
    .then(res => dispatch({ type: FETCH_CHORES_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCH_CHORES_FAILURE,
        payload: err.response.message
      })
    );
};

export const postNewChore = chore => dispatch => {
  dispatch({ type: POST_NEW_CHORE_START });
  axios
    .post(`home-chore-tracker.herokuapp.com/api/chores`, chore)
    .then(() => dispatch({ type: POST_NEW_CHORE_SUCCESS }))
    .catch(err =>
      dispatch({ type: POST_NEW_CHORE_FAILURE, payload: err.response.message })
    );
};

export const editChore = (id, chore) => dispatch => {
  dispatch({ type: EDIT_CHORE_START });
  axios
    .put(`home-chore-tracker.herokuapp.com/api/chores/${id}`, chore)
    .then(() => dispatch({ type: EDIT_CHORE_SUCCESS }))
    .catch(err =>
      dispatch({ type: EDIT_CHORE_FAILURE, payload: err.response.message })
    );
};

export const deleteChore = id => dispatch => {
  dispatch({ type: DELETE_CHORE_START });
  axios
    .delete(`home-chore-tracker.herokuapp.com/api/chores/${id}`)
    .then(() => dispatch({ type: DELETE_CHORE_SUCCESS }))
    .catch(err =>
      dispatch({
        type: DELETE_CHORE_FAILURE,
        payload: err.response.message
      })
    );
};

//CHILDREN
export const fetchChildren = () => dispatch => {
  dispatch({ type: FETCH_CHILDREN_START });
  axios
    .get(`home-chore-tracker.herokuapp.com/api/children`)
    .then(res => dispatch({ type: FETCH_CHILDREN_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCH_CHILDREN_FAILURE,
        payload: err.response.message
      })
    );
};

export const postNewChild = child => dispatch => {
  dispatch({ type: POST_NEW_CHILD_START });
  axios
    .post(`home-chore-tracker.herokuapp.com/api/children`, child)
    .then(() => dispatch({ type: POST_NEW_CHILD_SUCCESS }))
    .catch(err =>
      dispatch({
        type: POST_NEW_CHILD_FAILURE,
        payload: err.response.message
      })
    );
};

export const editChild = (id, child) => dispatch => {
  dispatch({ type: EDIT_CHILD_START });
  axios
    .put(`home-chore-tracker.herokuapp.com/api/children/${id}`, child)
    .then(() => dispatch({ type: EDIT_CHILD_SUCCESS }))
    .catch(err =>
      dispatch({
        type: EDIT_CHILD_FAILURE,
        payload: err.response.message
      })
    );
};

export const deleteChild = id => dispatch => {
  dispatch({ type: DELETE_CHILD_START });
  axios
    .delete(`home-chore-tracker.herokuapp.com/api/children/${id}`)
    .then(() => dispatch({ type: DELETE_CHILD_SUCCESS }))
    .catch(err =>
      dispatch({
        type: DELETE_CHILD_FAILURE,
        payload: err.response.message
      })
    );
};

//FAMILIES
export const fetchFamilies = () => dispatch => {
    dispatch({ type: FETCH_FAMILIES_START });
    axios
      .get(`home-chore-tracker.herokuapp.com/api/families`)
      .then(res => dispatch({ type: FETCH_FAMILIES_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({
          type: FETCH_FAMILIES_FAILURE,
          payload: err.response.message
        })
      );
  };
  
  export const postNewFamily = family => dispatch => {
    dispatch({ type: POST_NEW_FAMILY_START });
    axios
      .post(`home-chore-tracker.herokuapp.com/api/families`, family)
      .then(() => dispatch({ type: POST_NEW_FAMILY_SUCCESS }))
      .catch(err =>
        dispatch({
          type: POST_NEW_FAMILY_FAILURE,
          payload: err.response.message
        })
      );
  };
  
  export const editFamily = (id, family) => dispatch => {
    dispatch({ type: EDIT_FAMILY_START });
    axios
      .put(`home-chore-tracker.herokuapp.com/api/families/${id}`, family)
      .then(() => dispatch({ type: EDIT_FAMILY_SUCCESS }))
      .catch(err =>
        dispatch({
          type: EDIT_FAMILY_FAILURE,
          payload: err.response.message
        })
      );
  };
  
  export const deleteFamily = id => dispatch => {
    dispatch({ type: DELETE_FAMILY_START });
    axios
      .delete(`home-chore-tracker.herokuapp.com/api/families/${id}`)
      .then(() => dispatch({ type: DELETE_FAMILY_SUCCESS }))
      .catch(err =>
        dispatch({
          type: DELETE_FAMILY_FAILURE,
          payload: err.response.message
        })
      );
  };
