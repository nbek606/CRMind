import {BrowserRouter, Routes, Route} from 'react-router';
import {routesList} from "./routes";

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
                            element={<route.element />}
                        />
                    )
                }
            </Routes>
         </div>
     </BrowserRouter>
  )
}

export default App
