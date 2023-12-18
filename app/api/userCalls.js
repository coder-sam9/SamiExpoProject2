import client from "./client";

const getUsers = () => client.get("/users");
const getUser = (id) => client.get("/user/" + id);
const loginUser = (logDetails) => client.post("/auth", logDetails);
// const authApi = (loginUser) => client.post()
export default { getUsers, getUser, loginUser };
