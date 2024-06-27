import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../components/home";
import { AppLayout } from "../../layout";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}