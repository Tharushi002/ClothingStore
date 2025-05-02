import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';

<BrowserRouter>
  <Routes>
    {/* User-facing routes */}
    <Route path="/" element={<Home />} />
    
    {/* Admin route */}
    <Route path="/admin/*" element={<AdminDashboard />} />
  </Routes>
</BrowserRouter>