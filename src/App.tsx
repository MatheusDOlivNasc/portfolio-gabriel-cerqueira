import {BrowserRouter as Router, Outlet} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}