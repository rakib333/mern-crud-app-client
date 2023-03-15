import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import UpdatePage from "./pages/UpdatePage";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <ReadPage></ReadPage> },
        { path: "create", element: <CreatePage></CreatePage> },
        { path: "read", element: <ReadPage></ReadPage> },
        { path: "/update/:id", element: <UpdatePage></UpdatePage> }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
