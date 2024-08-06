import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import Header from "./components/common/Header";
import PageNotFound from "./components/errors/PageNotFound";
import "./index.css";
import Register from "./pages/auth/Register";

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
            element={<Header />}
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
