import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SearchHeader from './components/SearchHeader';
import Footer from './components/Footer';

const queryClient = new QueryClient();

export default function App(props) {
  return (
    <>
    <div className='flex flex-col justify-between'>
      <SearchHeader/>
      <QueryClientProvider client = {queryClient}>
        <Outlet/>
      </QueryClientProvider>
      <Footer/>
    </div>
    </>
  );
}

