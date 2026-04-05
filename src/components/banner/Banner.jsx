import React from 'react'
import BookImage from '../../assets/Hero-Book.png'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] mt-7 rounded-2xl container mx-auto px-7">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src={BookImage}
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn btn-success">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner