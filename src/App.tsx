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
import ListCandidate from "./features/doctor/pages/Candidate"
import PatientDataPage from "./features/patient/pages/PatientDataPage";
import Editdiet from "./features/doctor/pages/Editdiet";

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
            <Route path="/" element={<Dashboard />} />
            <Route path="/app/dashboard" element={<Dashboard />} />

            {/* doctor routes */}
            <Route path="/doctor/pacientes" element={<PatientPage/>} />
            <Route path="/doctor/pacientes/lista" element={<ListCandidate />} />
            <Route path="/doctor/pacientes/editar/:userId" element={<Editdiet />} />

            <Route path="/paciente/perfil/:userId" element={<PatientDataPage/>} />

            {/* </Route> */}

          {/* close protected routes */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
