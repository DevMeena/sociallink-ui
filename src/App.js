import Message from './components/Message';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
