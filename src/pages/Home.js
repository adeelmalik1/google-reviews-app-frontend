import React from "react";
import MainLayout from "../layout/MainLayout";
import ReviewCard from "../components/review/ReviewCard";
import AddressInput from "../components/address/Address";
import SentimentsChart from "../components/sentiments-chart/SentimentsChart";
import { useSelector } from "react-redux";

const Home = () => {
  const { review } = useSelector((state) => state.review);
  return (
    <>
      <div className="my-4">
        <AddressInput />
        <h4 className="heading">All Reviews </h4>
        <ReviewCard />
        <h4 className="heading mt-3">Sentiments Analysis </h4>
        {review?.data?.reviews.length > 0 && <SentimentsChart />}
      </div>
    </>
  );
};

export default MainLayout(Home);
