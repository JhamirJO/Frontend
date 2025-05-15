import { Navigate, Route, Routes } from 'react-router-dom';
import { CursosHome } from '../pages';




export const CursosRoutes = () => {
  return (
    <Routes>
        {
          //< Route path="/" element={ <Navigate to="/auth/login" />}  />
        }

        < Route path="resumen" element={ <CursosHome vista="resumen" />} />
        < Route path="copiar" element={ <CursosHome vista="copiar" />} />
        < Route path="registrados" element={ <CursosHome vista="registrados" />} />
        < Route path="detalles/:id" element={<CursosHome vista="detalles/:id" />} />
        < Route path="/:id/configuracion" element={<CursosHome vista="/:id/configuracion" />} />
    </Routes>
  )
}
