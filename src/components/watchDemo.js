import React from 'react';

const WatchDemo = () => {
  const videoUrl = 'UC8Promo.mp4';

  return (
    <div className="flex flex-col justify-center items-center mb-36 mt-12">
        <div className='text-center mt-2'>
            {/* <h1 className='text-3xl my-12'>Please Watch Demo</h1> */}
        </div>
        <div className='h-4/5 w-4/5 flex justify-center'>
          <video controls width="80%" src={videoUrl} autoPlay muted loop/>
        </div>
    </div>
  );
};

export default WatchDemo;
