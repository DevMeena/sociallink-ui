import React from 'react';
import Mockup from '../assets/images/social-mockup.png';
const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-indigo-300'>
      <div className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-screen grid grid-row-2 md:grid-cols-2 gap-4 px-10 py-8 md:py-0'>
        <div className='flex items-center justify-center'>
          <div className='p-4'>
            <h1 className='text-white text-4xl md:text-8xl my-4 mx-2 font-semibold'>
              Social Link
            </h1>
            <p className='text-white text-md md:text-lg my-4 mx-2'>
              It’s a fresh take on anonymity. We believe anonymity should be a
              fun yet safe place to express your feelings and opinions without
              shame. Young people don’t have a space to share their feelings
              without judgement from friends or societal pressures. NGL provides
              this safe space for teens.
            </p>
            <div className='download-buttons w-full flex flex-row'>
              <a href='/app' target='_blank' className='ios-download-link'>
                <img
                  src='https://uploads-ssl.webflow.com/62a6e19b906fa55f541799d7/62a6e36e6a31c835ec16d16b_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917%201.png'
                  alt='ios-store'
                  className='ios-download'
                />
              </a>
              <a href='/app' target='_blank' className='android-download-link'>
                <img
                  src='https://uploads-ssl.webflow.com/62a6e19b906fa55f541799d7/62a6e3de10ae34ace77a2fdb_en_badge_web_generic%201.png'
                  alt='android-store'
                  className='android-download'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center row-start-1 md:col-start-2'>
          <img
            src={Mockup}
            alt='mockup'
            className='h-96 mockup-img animate-wiggle'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
