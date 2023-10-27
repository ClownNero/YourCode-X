import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

export default function App(props) {
  
  return (
    <>
      <div className="flex flex-col justify-between">
        {/* {location.pathname === '/analysis/result' ? <ResultNavbar />:<Navbar />} */}
        <Navbar/>
        <QueryClientProvider client={queryClient}>
          <div>
            <Outlet />
          </div>
        </QueryClientProvider>
        <Footer />
      </div>
    </>
  );
}