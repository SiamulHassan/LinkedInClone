// react router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/profile" element={<Profile />}>
        {" "}
      </Route>
      <Route path="/profile" element={<Profile />}>
        {" "}
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
