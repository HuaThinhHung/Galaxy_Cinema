import React from "react";
import Home from "../pages/Home/home.jsx";
import HomePage from "../pages/Home/HomePage/homepage.jsx";
import About from "../pages/Home/About/about.jsx";
import ListMovie from "../pages/Home/ListMovie/list_movie.jsx";
import MovieDetails from "../pages/Home/MovieDetails/moive_details.jsx";
import News from "../pages/Home/News/news.jsx";
import Login from "../pages/Home/_Login/login.jsx";
import Register from "../pages/Home/_Register/register.jsx";
import Admin from "../pages/Admin/admin.jsx";
import DashBoard from "../pages/Admin/DashBoard/dasb_board.jsx";
import AddUser from "../pages/Admin/AddUser/add_user.jsx";
import MovieManagement from "../pages/Admin/MoiveManagement/movie_managenment.jsx";
import AddMovie from "../pages/Admin/AddMovie/add_movie.jsx";
import AuthPage from "../pages/Admin/AuthPage/auth_page.jsx";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "",
    element: Home,
    nested: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "about",
        element: About,
      },
      {
        path: "list-movie",
        element: ListMovie,
      },
      {
        path: "movie-details/:movieId",
        element: MovieDetails,
      },
      {
        path: "news",
        element: News,
      },
      {
        path: "login",
        element: Login,
      },
      {
        path: "register",
        element: Register,
      },
    ],
  },
  {
    path: "admin",
    element: Admin,
    nested: [
      {
        path: "dashboard",
        element: DashBoard,
      },
      {
        path: "add-user",
        element: AddUser,
      },
      {
        path: "movie-management",
        element: MovieManagement,
      },
      {
        path: "movie-management/add-movie",
        element: AddMovie,
      },
    ],
  },
  {
    path: "auth",
    element: AuthPage,
  },
];

export const generateRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
