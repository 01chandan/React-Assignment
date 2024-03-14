import React from 'react';

function Our_client({ value }) {
  return (
    <div className="flex justify-center items-center flex-col mt-7 px-4 md:px-6 lg:px-8">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#4D4D4D] py-2 text-center">Our Clients</h1>
      <p className="text-[#717171] text-xs md:text-sm lg:text-base text-center mt-2">
        We have been working with some Fortune 500+ clients
      </p>

      {/* Icons */}
      <div className="w-full flex justify-center items-center flex-wrap py-8">
        {value.map((item, index) => (
          <img
            key={index}
            className="w-[3rem] h-auto mx-2 my-2 md:mx-4 md:my-2 lg:mx-6 lg:my-3 hover:scale-105 duration-500"
            src={item.icon}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default Our_client;
