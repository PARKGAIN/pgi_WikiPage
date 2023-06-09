import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Main = lazy(() => import("@pages/MainPage"));
const Wiki = lazy(() => import("@pages/WikiPage"));
const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Wiki />} />
        <Route path="/:title" element={<Wiki />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
