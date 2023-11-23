import React from 'react';
import { createRoot } from 'react-dom/client';
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";


if (document.getElementById('user')) {
    
const container = document.getElementById('user');
const root = createRoot(container);
root.render(<React.StrictMode>
    <RouterProvider router={routes} />
</React.StrictMode>);

}
