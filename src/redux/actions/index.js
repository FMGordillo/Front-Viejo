import { ADD_USER, ADD_PROJECT, SET_USER, SET_USERS } from "./actionTypes";
import axios from "axios";

const MAIN_API = "http://localhost:4000";

/**
 * TODO: Definir el shape del objeto
 * @param {Object} user
 */
// const createUser = user => ({
//   type: ADD_USER,
//   user
// });

// const createProject = project => ({
//   type: ADD_PROJECT,
//   project
// });
const setUser = user => ({
  type: SET_USER,
  user
});

const setUsers = users => ({
  type: SET_USERS,
  users
});

/**
 *
 * @param {*} id
 */
export const fetchProject = (id = "") => {
  return [
    {
      "project-id": ""
    }
  ];
};

/**
 * TODO: Improve it when Auth0 is implemented
 */
export const fetchUser = () => dispatch =>
  axios
    .get(`${MAIN_API}/api/users/user`)
    .then(res => res.data)
    .then(user => dispatch(setUser(user)));

export const getAllUsers = () => dispatch =>
  axios
    .get(`${MAIN_API}/api/users`)
    .then(res => res.data)
    .then(users => dispatch(setUsers(users)));
