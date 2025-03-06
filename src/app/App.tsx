import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {routesList} from "./routes";
import {ProtectedRoute} from "@/shared/ui/redirect";

function App() {
  return (
     <BrowserRouter>
         <div className="container">
            <Routes>
                {
                    routesList.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<ProtectedRoute path={route.path}>{<route.element/>}</ProtectedRoute>}
                        />
                    )
                }
            </Routes>
         </div>
     </BrowserRouter>
  )
}

export default App
