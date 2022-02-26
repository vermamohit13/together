import React from "react"
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const authToken = localStorage.getItem('token')
  return (
    authToken ? <Outlet /> : <Navigate to="/login" />
    )
}


