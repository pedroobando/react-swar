import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import './sidebar.js';

export const Layout = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      {/* Page content wrapper */}
      <div id="page-content-wrapper">
        <Navbar />
        {/* Page content */}
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
