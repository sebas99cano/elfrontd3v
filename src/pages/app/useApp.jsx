import { routes } from "./routes";
import { Route } from "react-router-dom";

const useApp = () => {
  const getRoutes = (routes) => {
    return routes.map((route) => {
      if (route.children && route.children.length > 0) {
        return (
          <Route path={route.path} element={route.element} key={route.name}>
            {route.children.map((children) => {
              if (children.index) {
                return (
                  <Route index element={children.element} key={route.name} />
                );
              } else {
                return (
                  <Route
                    path={children.path}
                    element={children.element}
                    key={route.name}
                  />
                );
              }
            })}
          </Route>
        );
      } else {
        return (
          <Route path={route.path} element={route.element} key={route.name} />
        );
      }
    });
  };
  const routesList = getRoutes(routes());

  return { routesList };
};

export default useApp;
