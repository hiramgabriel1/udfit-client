import "./index.css";
import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import Header from "./components/common/Header";
import PageNotFound from "./components/Errors/PageNotFound";

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
            errorElement={<HandleError/>}
            action={()=> { throw new Response('error', { status: 404 }) }}
          />
          {/* error elements render */}
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
