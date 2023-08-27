import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsSearch, BsYoutube } from 'react-icons/bs';

export default function Footer(props) {
  return (
    <>
      <footer className='w-full flex p-4 text-2xl border-t border-zinc-600 mt-4'>
        <div className='m-auto'> 
          <h1 className='font-bold ml-2 text-3xl'> Footer </h1>
        </div>
    </footer>
    </>
  );
}

