import { Routes, Route } from 'react-router';
import { HomePage } from './pages';
import { Navbar } from './components/ui';
import DetailPage from './pages/detail-page';


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index path="/character" element={<HomePage />}></Route>
        <Route index path="/character/:id" element={<DetailPage />}></Route>
      </Routes>
    </>
  )
}

export default App
