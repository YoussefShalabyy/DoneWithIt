import React from "react";
import ListingsScreen from "../screens/ListingsScreen";
import OfflineNotice from "../../components/OfflineNotice";

const index = () => {
  return (
    <>
      <OfflineNotice />
      <ListingsScreen />
    </>
  );
};

export default index;
