import { Box } from '@mui/material'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from 'react-router-dom'

import AppBar from '@/components/AppBar'

const AppLayout = () => {
  return (
    <>
      <AppBar />
      <Box sx={{ flexGrow: 1, overflow: 'auto', pt: 3 }}>
        <Outlet />
      </Box>
    </>
  )
}

export default AppLayout
