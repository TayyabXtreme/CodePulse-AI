'use client';
import React from 'react';
import CodeReviewPanel from '../components/CodeReviewPanel';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-center">CodePulse AI - Code Review</h1>
      </header>
      
      <CodeReviewPanel />
    </div>
  );
};

export default MainPage;