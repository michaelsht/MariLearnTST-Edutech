// pages/Recommendation.tsx
"use client"
import React, { useEffect, useState } from 'react';
import ClassRecommendationTable from '@/components/ClassRecommendationTable';
import InstructorRecommendationTable from '@/components/InstructorRecommendationTable';

const Recommendation: React.FC = () => {
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
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Class and Instructor Recommendation</h1>

      <div className="flex space-x-4 pt-4">
        <a href="/dashboard" className="bg-blue-500 text-white py-2 px-4 rounded">Manajemen Edutech</a>
        <a href="/dashboard/recommendation" className="bg-green-500 text-white py-2 px-4 rounded">Recommendation</a>
        <a href="/dashboard/movie" className="bg-yellow-500 text-white py-2 px-4 rounded">Foods & Drinks</a>
      </div>

      <div className="mt-8 w-5/6 pt-4">
          <p className="text-justify">MariLearn menyediakan Class Recommendation untuk memberikan saran kelas berdasarkan minat siswa, serta Instructor Recommendation untuk merekomendasikan pengajar yang sesuai dengan minat dan Pengajar.</p>
          <ClassRecommendationTable />
          <InstructorRecommendationTable />
      </div>
    </div>
  );
};
export default Recommendation;