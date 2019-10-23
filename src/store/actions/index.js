import axiosWithAuth from "../../axios/index";

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
  axiosWithAuth()
    .get(`/chores`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_CHORES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_CHORES_FAILURE,
        payload: err.response
      });
    });
};

export const postNewChore = chore => dispatch => {
  dispatch({ type: POST_NEW_CHORE_START });
  axiosWithAuth()
    .post(`/chores`, chore)
    .then(res => {
      console.log(res.data)
      dispatch({ type: POST_NEW_CHORE_SUCCESS })})
    .catch(err =>
      dispatch({ type: POST_NEW_CHORE_FAILURE, payload: err.response })
    );
};

export const editChore = (id, chore) => dispatch => {
  dispatch({ type: EDIT_CHORE_START });
  axiosWithAuth()
    .put(`/chores/${id}`, chore)
    .then(() => dispatch({ type: EDIT_CHORE_SUCCESS }))
    .catch(err =>
      dispatch({ type: EDIT_CHORE_FAILURE, payload: err.response })
    );
};

export const deleteChore = id => dispatch => {
  dispatch({ type: DELETE_CHORE_START });
  axiosWithAuth()
    .delete(`/chores/${id}`)
    .then(() => dispatch({ type: DELETE_CHORE_SUCCESS }))
    .catch(err =>
      dispatch({
        type: DELETE_CHORE_FAILURE,
        payload: err.response
      })
    );
};

//CHILDREN
export const fetchChildren = () => dispatch => {
  dispatch({ type: FETCH_CHILDREN_START });
  axiosWithAuth()
    .get(`/children`)
    .then(res => dispatch({ type: FETCH_CHILDREN_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCH_CHILDREN_FAILURE,
        payload: err.response
      })
    );
};

export const postNewChild = child => dispatch => {
  dispatch({ type: POST_NEW_CHILD_START });
  axiosWithAuth()
    .post(`/children`, child)
    .then(() => dispatch({ type: POST_NEW_CHILD_SUCCESS }))
    .catch(err =>
      dispatch({
        type: POST_NEW_CHILD_FAILURE,
        payload: err.response
      })
    );
};

export const editChild = (id, child) => dispatch => {
  dispatch({ type: EDIT_CHILD_START });
  axiosWithAuth()
    .put(`/children/${id}`, child)
    .then(() => dispatch({ type: EDIT_CHILD_SUCCESS }))
    .catch(err =>
      dispatch({
        type: EDIT_CHILD_FAILURE,
        payload: err.response
      })
    );
};

export const deleteChild = id => dispatch => {
  dispatch({ type: DELETE_CHILD_START });
  axiosWithAuth()
    .delete(`/children/${id}`)
    .then(() => dispatch({ type: DELETE_CHILD_SUCCESS }))
    .catch(err =>
      dispatch({
        type: DELETE_CHILD_FAILURE,
        payload: err.response
      })
    );
};

//FAMILIES
export const fetchFamilies = () => dispatch => {
  dispatch({ type: FETCH_FAMILIES_START });
  axiosWithAuth()
    .get(`/families`)
    .then(res => dispatch({ type: FETCH_FAMILIES_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCH_FAMILIES_FAILURE,
        payload: err.response
      })
    );
};

export const postNewFamily = family => dispatch => {
  dispatch({ type: POST_NEW_FAMILY_START });
  axiosWithAuth()
    .post(`/families`, family)
    .then((res) => {
      console.log(res.data)
      dispatch({ type: POST_NEW_FAMILY_SUCCESS })}
    )
    .catch(err =>
      dispatch({
        type: POST_NEW_FAMILY_FAILURE,
        payload: err.response
      })
    );
};

export const editFamily = (id, family) => dispatch => {
  dispatch({ type: EDIT_FAMILY_START });
  axiosWithAuth()
    .put(`/families/${id}`, family)
    .then(() => dispatch({ type: EDIT_FAMILY_SUCCESS }))
    .catch(err =>
      dispatch({
        type: EDIT_FAMILY_FAILURE,
        payload: err.response
      })
    );
};

export const deleteFamily = id => dispatch => {
  dispatch({ type: DELETE_FAMILY_START });
  axiosWithAuth()
    .delete(`/families/${id}`)
    .then(() => dispatch({ type: DELETE_FAMILY_SUCCESS }))
    .catch(err =>
      dispatch({
        type: DELETE_FAMILY_FAILURE,
        payload: err.response
      })
    );
};
