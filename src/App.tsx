
import { RouterProvider } from 'react-router-dom';
import './App.css'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer';
import { router } from './Router'

function App() {

  return (
    <>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
