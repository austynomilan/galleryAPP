import Home from './Home/Home'
import { SkeletonTheme } from 'react-loading-skeleton'
import './App.css'

function App() {
 

  return (
    <>
    <SkeletonTheme baseColor="#313030" highlightColor="#444">
      <Home />
    </SkeletonTheme>
    </>
  )
}

export default App
