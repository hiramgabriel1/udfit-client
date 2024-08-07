import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import PageNotFound from "./errors/PageNotFound";
import Register from "./features/auth/pages/Login";
import Dashboard from "./features/dashboard/pages/Dashboard";
import "./index.css";
import ProtectedRoute from "./shared/components/ProtectedRoute";

function HandleError() {
  const error = useRouteError();

  console.log(error);

  return <PageNotFound />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
            errorElement={<HandleError />}
            action={() => {
              throw new Response("error", { status: 404 });
            }}
          />
          <Route path="/app/auth/login-user" element={<Register />} />
          
          {/** 
           * @routesProtected
           * rutas protegidas deben estar dentro 
          */ }

          <Route element={<ProtectedRoute />}>
            <Route path="/prueba" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recets" element={<Dashboard />} />
            <Route path="/kdjdk" element={<Dashboard />} />
          </Route>
          
          {/* close protected routes */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
