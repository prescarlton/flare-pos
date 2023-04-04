import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'

import AppLayout from './layouts/AppLayout'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
