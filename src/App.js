import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Create from './components/Create/Create';
import Read from './components/Read/Read';
import Update from './components/Update/Update';
import Main from './Layout/Main';
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {path: 'create', element: <Create></Create>},
        {path: 'read', element: <Read></Read>},
        {path: 'update', element: <Update></Update>}
    ]}
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
