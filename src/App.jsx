import './components/button/button.css'
import { Route, Routes } from '@solidjs/router'
import { Topbar } from './components/topbar/topbar';
import { Homepage } from './pages/homepage';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path='/' component={Homepage} />
      </Routes>
    </>
  );
}

export default App;
