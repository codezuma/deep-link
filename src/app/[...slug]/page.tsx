"use client";
import React from 'react';

const AppLandingPage = () => {
  const APP_PACKAGE = 'com.samatvalife.wellness';


  const openPlayStore = () => {
    const userAgent = navigator.userAgent || navigator.vendor

    if (/android/i.test(userAgent)) {
      window.location.href = `market://details?id=${APP_PACKAGE}`;
      setTimeout(() => {
        window.location.href = `https://play.google.com/store/apps/details?id=${APP_PACKAGE}`;
      }, 500);
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      alert('This app is currently available only on Android devices');
    } else {
      window.open(`https://play.google.com/store/apps/details?id=${APP_PACKAGE}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Samatva Wellness
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your health journey with intelligent, personalized wellness tracking.
          </p>

          <div className="flex space-x-4 justify-center md:justify-start">
            <button
              onClick={openPlayStore}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              Install App
            </button>

          </div>
        </div>


      </div>

      {/* Features Section */}


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Samatva Wellness. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLandingPage;