import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './page/Home'
import { PostDetails } from './page/PostDetails'

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="" element={<Home />} />
      <Route path="/postDetails/:id" element={<PostDetails />} />
    </Route>,
  ),
)
