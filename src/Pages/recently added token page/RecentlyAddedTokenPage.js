import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import RecentlyApiPage from '../../components/todayCrypto/recentlyAdded/recently added api page/RecentlyApiPage';

const RecentlyAddedTokenPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <RecentlyApiPage />
        <Footer />
      </div>
    </>
  );
}

export default RecentlyAddedTokenPage
