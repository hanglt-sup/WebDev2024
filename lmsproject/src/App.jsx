import { publicRouter, privateRouter } from "../router/router.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../layout/Layout.jsx";

const App = () => {
  return (
    <>
      <Routes>
        {privateRouter.map((route, index) => {
          return (
            <Route path={route.path} element={route.component} key={index} />
          );
        })}

        <Route path="/" element={<Layout />}>
          {publicRouter.map((route, index) => {
            return (
              <Route path={route.path} element={route.component} key={index} />
            );
          })}
        </Route>
      </Routes>
    </>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> fb13f586622038c012dd10e599708507787c74b2
