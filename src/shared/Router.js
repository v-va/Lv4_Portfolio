import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Detail from '../pages/Detail'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Main />} />
                <Route path='detail/:id' element={<Detail />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
