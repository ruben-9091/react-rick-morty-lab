import { Routes, Route } from 'react-router';
import { HomePage } from './pages';
import { Navbar } from './components/ui';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </>
  )
}

export default App
