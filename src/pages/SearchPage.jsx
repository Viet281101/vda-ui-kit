import React, { useEffect } from "react";

const SearchPage = () => {
  useEffect(() => {
    console.log("Search Page Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      Test
    </div>
  );
};

export default SearchPage;
