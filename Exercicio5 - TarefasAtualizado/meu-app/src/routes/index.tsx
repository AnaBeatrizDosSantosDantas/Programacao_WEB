import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/not-found'
import Sobre from '../pages/sobre'
import Contato from '../pages/contato'
import Tarefas from '../pages/Tarefas'
  
const router = createBrowserRouter([
{path: '/', element: <Home />, errorElement: <NotFound />},
{path: '/sobre', element: <Sobre />},
{path: '/contato', element: <Contato />},
{path: '/tarefas', element: <Tarefas />}

])

export default router