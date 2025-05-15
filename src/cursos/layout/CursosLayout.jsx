import { Box } from '@mui/system'


export const CursosLayout = ({ children }) => {

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8'}}
        >
            { children }
            
        </Box>
    </Box>
  )
}