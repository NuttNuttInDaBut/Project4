import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="border-b border-neutral-800 flex flex-col mt-6 lg:mt-20 items-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl
       text-center tracking-wide">
        VirtualR build tools <span className="bg-gradient-to-r
        from-orange-500 to-orange-800 text-transparent
        bg-clip-text">for Developers</span>
      </h1>
      <p className='text-lg text-center text-neutral-500 max-w-4xl mt-10'>
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality.
      </p>
      <div className='flex justify-center my-10 space-x-3'>
        <a href="#" className='
         rounded-md p-2.5 bg-gradient-to-r
        from-orange-500 to-orange-800'>Start for free!</a>
        <a href="#" className='border rounded-md p-2.5'>Documentation</a>
      </div>
    <div className='flex mt-10 justify-center'>
      <video autoPlay loop muted className='
      rounded-3xl w-1/2 border border-orange-700 shadow-orange-400
      mx-2 my-10'>
        <source src={video1} type='video/mp4' />
      </video>
      <video autoPlay loop muted className='
      rounded-3xl w-1/2 border border-orange-700 shadow-orange-400
      mx-2 my-10'>
        <source src={video2} type='video/mp4'/>
      </video>
    </div>
    </div>
  )
}

export default HeroSection