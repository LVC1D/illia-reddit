import React from 'react';
import { Provider } from 'react-redux';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter, Navigate } from 'react-router-dom';
import Root from '../components/Root';
import Posts from '../features/posts/Posts';
import { store } from './store';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<Root/>}>
    <Route path='' element={<Posts/>} />
  </Route>
))

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
