import React from 'react';
import ReactPlayer from 'react-player';
const banner = () => {
    return (
        <>
          <section className='banner'>
            <div className='video_section'>

            {/* <div className="video-container"> */}
  

            {/* <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover'
      }}
    >
      <source
        src="https://supreme-group.vercel.app/static/media/automotive.224e7418884105595114.mp4"
        type="video/mp4"
      />
      <source
        src="https://supreme-group.vercel.app/static/media/automotive.224e7418884105595114.mp4"
        type="video/ogg"
      />
      Your browser does not support the video tag.
    </video> */}


<ReactPlayer
      url="/img/video.mp4"
      playing
      muted
      loop
      controls={false}
      width="100%"
      height="100%"
      style={{ objectFit: 'cover' }}
    />
{/* </div> */}

<div className="content">
    <p>Performance in motion</p>
    <h2><span className='text-bold'>Soft Trims and</span> <span className='text-bold text-blue'>NVH Solutions</span></h2>
    <h2>for seamless rides</h2>
</div>
 
            </div>
            </section>  
        </>
    );
};

export default banner;