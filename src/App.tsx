import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import PageNotFound from "./errors/PageNotFound";
import Dashboard from "./features/dashboard/pages/Dashboard";
import "./index.css";
// import ProtectedRoute from "./shared/components/ProtectedRoute";
import { Around } from "@theme-toggles/react";
import "@theme-toggles/react/css/Around.css";
import { useEffect, useState } from "react";
import ThemePreferencesStore from "./shared/stores/preferencesUser";
import { changeTheme } from "./shared/common/preferencesTheme";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Header from "./features/dashboard/components/Header";
import PatientPage from "./features/patient/pages/PatientPage";

function HandleError() {
  const error = useRouteError();

  console.log(error);

  return <PageNotFound />;
}

function App() {
  const { setDarkMode, setLightMode } = ThemePreferencesStore();
  const [isToggled, setToggle] = useState(false);

  useEffect(() => {
    isToggled ? setDarkMode() : setLightMode();

    if (isToggled) {
      changeTheme();
      setDarkMode();
    }

    setLightMode();

    console.log(isToggled);
  }, [isToggled, setDarkMode, setLightMode]);

  return (
    <>
      <Header/>
      <Around
        duration={800}
        reversed
        toggled={isToggled}
        toggle={setToggle}
        placeholder={isToggled ? "Cambiar a ligth" : "cambiar a dark"}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      ></Around>
      <BrowserRouter>
        <Routes>
          <Route
            path="/app"
            element={<Dashboard />}
            errorElement={<HandleError />}
            action={() => {
              throw new Response("error", { status: 404 });
            }}
          />
          <Route path="/app/auth/login-user" element={<Login />} />
          <Route path="/app/auth/register-user" element={<Register />} />

          {/**
           * @routesProtected
           * rutas protegidas deben estar dentro
           */}

          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/prueba" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pacientes" element={<PatientPage/>} />
            <Route path="/kdjdk" element={<Dashboard />} />
          {/* </Route> */}

          {/* close protected routes */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
