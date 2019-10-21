import axios from "axios";

//ACTION TYPES
export const FETCH_CHORES_START = "FETCH_CHORES_START";
export const FETCH_CHORES_SUCCESS = "FETCH_CHORES_SUCCESS";
export const FETCH_CHORES_FAILURE = "FETCH_CHORES_FAILURE";

export const POST_NEW_CHORE_START = "POST_NEW_CHORE_START";
export const POST_NEW_CHORE_SUCCESS = "POST_NEW_CHORE_SUCCESS";
export const POST_NEW_CHORE_FAILURE = "POST_NEW_CHORE_FAILURE";

export const FETCH_KIDS_START = "FETCH_KIDS_START";
export const FETCH_KIDS_SUCCESS = "FETCH_KIDS_SUCCESS";
export const FETCH_KIDS_FAILURE = "FETCH_KIDS_FAILURE";

export const POST_NEW_KID_START = "POST_NEW_KID_START";
export const POST_NEW_KID_SUCCESS = "POST_NEW_KID_SUCCESS";
export const POST_NEW_KID_FAILURE = "POST_NEW_KID_FAILURE";

//ACTION CREATORS

//Chores
export const fetchChores = () => dispatch => {
  dispatch({ type: FETCH_CHORES_START });
  axios
    .get(`insert api`)
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
    .post(`insert api`, chore)
    .then(() => dispatch({ type: POST_NEW_CHORE_SUCCESS }))
    .catch(err =>
      dispatch({ type: POST_NEW_CHORE_FAILURE, payload: err.response.message })
    );
};


//Kids
export const fetchKids = () => dispatch => {
    dispatch({ type: FETCH_KIDS_START });
    axios
      .get(`insert api`)
      .then(res => dispatch({ type: FETCH_KIDS_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({
          type: FETCH_KIDS_FAILURE,
          payload: err.response.message
        })
      );
  };

export const postNewKid = () => dispatch => {
    dispatch({ type: POST_NEW_KID_START });
    axios
      .get(`insert api`)
      .then(res => dispatch({ type: POST_NEW_KID_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({
          type: POST_NEW_KID_FAILURE,
          payload: err.response.message
        })
      );
  };


