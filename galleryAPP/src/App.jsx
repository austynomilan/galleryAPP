import Home from './Home/Home'
import AuthUser from './authUser/authUser';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton'
import './App.css'

function App() {
  

  return (
    <>
    <SkeletonTheme baseColor="#313030" highlightColor="#444">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/userSignIn" element={ <AuthUser /> }/>
      </Routes>
    </Router>
    </SkeletonTheme>
    </>
  )
}

export default App

