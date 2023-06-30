import React from "react";
import Sidebar from "../components/main/Sidebar";

function Main() {
  return (
    <div className='grid grid-cols-7 gap-2 min-h-screen bg-neutral'>
      <Sidebar />
      <div className='col-span-6 min-h-screen '>
        <h1>Welcome to the sanctum</h1>
      </div>
    </div>
  );
}

export default Main;
