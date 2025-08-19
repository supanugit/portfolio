import React from "react";
import Home from "./../components/Home";

export default async function MainPage() {
  // Fetch your data here
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <Home />
    </div>
  );
}
