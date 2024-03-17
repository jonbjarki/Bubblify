import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./main";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BubbleList from "./components/BubbleList";
import Product from "./components/Product";
import BundleList from "./components/BundleList";
import PageNotFound from "./components/PageNotFound";
import AboutUs from "./components/AboutUs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/bubbles',
    element: <BubbleList />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/bubbles/:productId',
    element: <Product />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/bundles',
    element: <BundleList />,
    errorElement: <PageNotFound />,
  },
  {
    path: 'about',
    element: <AboutUs />,
    errorElement: <PageNotFound />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
