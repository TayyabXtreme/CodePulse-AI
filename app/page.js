'use client';
import React, { useState } from 'react';

const MainPage = () => {
  const [code, setCode] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeReview = async () => {
    if (!code.trim()) return;
    
    setIsLoading(true);
    try {
      // Replace with your actual API endpoint for AI code review
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      
      if (!response.ok) throw new Error('Failed to get code review');
      
      const data = await response.json();
      setAiResponse(data.review || 'No issues found in your code.');
    } catch (error) {
      console.error('Error reviewing code:', error);
      setAiResponse('Error analyzing code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-center">CodePulse AI - Code Review</h1>
      </header>
      
      <div className="flex flex-col md:flex-row gap-4">
        {/* Code Input Section */}
        <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 text-white p-3 font-medium">Your Code</div>
          <div className="p-4 h-full">
            <textarea
              className="w-full h-[500px] border border-gray-300 rounded p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste or write your code here..."
            />
            <button
              onClick={handleCodeReview}
              disabled={isLoading}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Analyzing...' : 'Review Code'}
            </button>
          </div>
        </div>
        
        {/* AI Response Section */}
        <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 text-white p-3 font-medium">AI Review</div>
          <div className="p-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-[500px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="h-[500px] border border-gray-300 rounded p-3 font-mono text-sm overflow-auto whitespace-pre-wrap">
                {aiResponse || 'AI feedback will appear here after you submit your code for review.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;