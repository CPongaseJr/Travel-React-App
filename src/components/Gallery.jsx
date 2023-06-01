import React from 'react';

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2 '>
            <img className='w-full h-full object-cover' src='https://www.detourista.com/wp/wp-content/uploads/Unorganized/Bohol-Attractions-Featured-Image.jpg' alt='/' />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://images.summitmedia-digital.com/spotph/images/2021/02/19/bohol-sale-2-1613702262.jpg' alt='/' />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://deih43ym53wif.cloudfront.net/boat-cruise-on-loboc-river-bohol-shutterstock_1882929427.jpg_5179eca2bb.jpg' alt='/' />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://www.bohol-philippines.com/images/Mahogany-Man-Made-Forest-in-Bohol-by-Mond-Reymond.jpg' alt='/' />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://youimg1.tripcdn.com/target/100w1f000001gwb6wDCFB.jpg' alt='/' />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
