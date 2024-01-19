import React from 'react';

const VideoBanner: React.FC<{ src: string }> = ({ src }) => {
  return (

      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover overflow-hidden"
        style={{ objectFit: 'cover' }}
      ></video>
  );
};

export default VideoBanner;
