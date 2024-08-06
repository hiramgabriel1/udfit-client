import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import PageNotFound from "./errors/PageNotFound";
import Register from "./features/auth/pages/Login";
import Dashboard from "./features/dashboard/pages/Dashboard";
import "./index.css";

function HandleError(){
  const error = useRouteError()

  console.log(error);
  
  return <PageNotFound />
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route
            path="/"
            element={<Dashboard />}
            errorElement={<HandleError />}
            action={()=> { throw new Response('error', { status: 404 }) }}
          />
          <Route path="/app/auth/login-user" element={<Register />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
