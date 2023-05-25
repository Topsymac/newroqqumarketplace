import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import TrendingApiPage from '../../components/todayCrypto/trendingToken/trending api page/TrendingApiPage';

const TrendingTokenPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <TrendingApiPage />
        <Footer />
      </div>
    </>
  );
}

export default TrendingTokenPage
