import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts from './routes/Posts';
import './index.css';
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [
          {
            path: '/create-post/',
            element: <NewPost />
          },
        ]
      },
      {
        path: '/test',
        element: <h1>hello world</h1>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */ }
    <RouterProvider router={ router } />
  </React.StrictMode>
);
