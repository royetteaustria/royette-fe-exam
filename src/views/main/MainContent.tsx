import { Route, Routes } from 'react-router-dom';
import mainroutes from '../../routes/Routes';

const MainContent = () => {
  return (
    <>
      <Routes>
      {mainroutes.map((route, index) => (
        <Route 
          key={index} 
          path={route.path} 
          element={<route.component />} 
        />
      ))}
    </Routes>
    </>
  )
}

export default MainContent