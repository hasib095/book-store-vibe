import Image from 'next/image';
import React from 'react';
import bannerImg from "@/assets/hero_img.jpg"

//
const Banner = () => {
    return (
       <section className='py-20'>
         <div className='grid grid-cols-2 items-center container mx-auto gap-4 bg-[#F3F3F3] rounded-4xl p-3 '>
            <div className='flex flex-col items-center space-y-4'>
                <h2 className="font-bold text-5xl text-center">Books to freshen up <br /> your bookshelf</h2>
                <button className='btn btn-success text-center'>View The List</button>
            </div>
            <div>
            <Image
           src="https://designobserver.com/wp-content/uploads/2024/06/40406-sa-hero.png"
           alt="Picture of the author"
           width={500}
           height={500}
    />
            </div>
        </div>
       </section>
    );
};

export default Banner;