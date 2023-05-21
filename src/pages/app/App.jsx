import { Suspense } from "react";
import useApp from "./useApp";
import { Routes } from "react-router-dom";

const App = () => {
  const { routesList } = useApp();
  return (
    <Suspense fallback={<>...</>}>
      <Routes>{routesList}</Routes>
    </Suspense>
  );
};

export default App;
