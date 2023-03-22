import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contador1 } from '../pages/Contador1'
import { Contador2 } from '../pages/Contador2'
import { Contador3 } from '../pages/Contador3'
import { GiphyV1 } from '../pages/GiphyV1'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const RouterProvider = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/counterV1" element={<Contador1 />} />
          <Route path="/counterV2" element={<Contador2 />} />
          <Route path="/counterV3" element={<Contador3 />} />
          <Route path="/giphyV1" element={<GiphyV1 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
