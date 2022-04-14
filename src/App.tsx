import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { theme } from 'styles/theme'

import Home from 'pages/Home'
import CreateJob from 'pages/CreateJob'
import EditJob from 'pages/EditJob'
import Login from 'pages/Login'
import Register from 'pages/Register'

import PrivateRoute from 'components/PrivateRoute'
import Profile from 'pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/edit-job/:id" element={<EditJob />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
