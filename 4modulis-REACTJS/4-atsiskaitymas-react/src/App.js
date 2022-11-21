import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { PageLayout } from './Components/PageLayout/PageLayout';

const AddPage = React.lazy(() => import ('./views/AddPage/AddPage'));
const HomePage = React.lazy(() => import ('./views/HomePage/HomePage'));
const LoginPage = React.lazy(() => import ('./views/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import ('./views/RegisterPage/RegisterPage'));


function App() {
  return (
    <div className="App" >

      <Routes>
        
        <Route path='/register' element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <RegisterPage/>
              </React.Suspense>
            }/>

            <Route path='/login' element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LoginPage/>
              </React.Suspense>
            }/>

        <Route path='/' element={<PageLayout/>}>

          <Route index element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <HomePage/>
            </React.Suspense>
            } />

          <Route path='add' element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AddPage/>
            </React.Suspense>
          }/>

        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
