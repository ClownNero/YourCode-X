import React from 'react';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import MainList from '../components/MainList';

export default function MainPages(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className='h-screen'>
        <form className='w-full flex justify-center ' onSubmit={handleSubmit}>
            <input
                className='w-7/12 p-2 outline-none bg-black text-gray-50'
                type="text"
                placeholder='Search...'
            />
            <button className='bg-zinc-600 px-4'>
                <BsSearch />
            </button>
        </form>
        <section className='flex flex-col mt-4 text-center'>
          <img className="w-60 m-auto"src="https://www.gstatic.com/pagespeed/insights/ui/img/graphic-home-hero.svg"></img>
          <h2 className='text-3xl font-bold'>모든 기기에서 웹페이지 보안을 개선해 보세요.</h2>
          <ul>
            <MainList/>
          </ul>        
        </section>
      </div>          
    </>
  );
}

