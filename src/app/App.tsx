import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {routesList} from "./routes";
import {ProtectedRoute} from "@/shared/ui/redirect";
import './App.scss';

function App() {
  return (
     <BrowserRouter>
         <div className="main">
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
