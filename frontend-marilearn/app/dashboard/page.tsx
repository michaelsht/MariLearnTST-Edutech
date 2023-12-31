"use client"
import React, { useEffect, useState } from 'react';
import StudentList from '@/components/StudentList';

const LandingPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
    } else {
      window.location.href = '/';
    }
  }, []);

  if (!isAuthenticated) {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="flex flex-col items-center mt-10 pt-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to MariLearn</h1>
      <div className="flex space-x-4 pt-4">
        <a href="/dashboard" className="bg-blue-500 text-white py-2 px-4 rounded">Edutech Management</a>
        <a href="/dashboard/recommendation" className="bg-green-500 text-white py-2 px-4 rounded">Recommendation</a>
        <a href="/dashboard/movie" className="bg-yellow-500 text-white py-2 px-4 rounded">Foods & Drinks</a>
        <button
          type="button"
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <div className="mt-8 w-5/6 pt-4">
        {/* Konten untuk Manajemen Edutech */}
        <h2 className="flex text-2xl font-bold mb-4 justify-center items-center text-green-600">Edutech Management</h2>
        <p className="text-justify">Integrasi MariLearn dengan Beverage Recommendation membawa dimensi personalisasi baru, meningkatkan pengalaman belajar dengan memberikan rekomendasi kelas dan instruktur sekaligus minuman yang disesuaikan dengan preferensi dan kondisi unik setiap pengguna.</p>
        <div className="space-y-8">
          <StudentList />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;