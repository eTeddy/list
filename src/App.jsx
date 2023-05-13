import {
  createHashRouter,
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Dice from './pages/dice/Dice'
import Shop from './pages/shop/Shop'
import Gallery from './pages/gallery/Gallery'
import Buttons from './pages/buttons/Buttons'
import Button3D from './pages/button3D/Button3D'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} />
      <Route path="buttons" element={<Buttons />} />  */}
      <Route path="dice" element={<Dice />} />
      <Route path="shop" element={<Shop />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="buttons3d" element={<Button3D />} />      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App