import { create } from "apisauce";
import storage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.43.159:9000/api",
});
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await storage.getToken();
  console.log(authToken);
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});
export default apiClient;
