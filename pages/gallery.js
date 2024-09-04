import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head';
import Image from 'next/image';

const images = [
  '/newImg.jpeg',
  '/newImg1.jpeg',
  '/newImg2.jpeg',
  '/newImg3.jpeg',
  '/newImg4.jpeg',
  '/newImg5.jpeg',
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
  '/slide4.jpg',
  '/slide5.jpg',
  '/slide6.jpg',
  '/slide7.jpg',
  '/slide8.jpg',
  '/slide9.jpg',
  '/slide10.jpg',
  '/slide11.jpg',
  '/slide12.jpg',
  '/slide13.jpg',
  '/slide14.jpg',
  '/slide16.jpg',
  '/slide17.jpg',
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
        <Head>
            <title>Green acres hospital - Our gallery</title>
        </Head>
        <Navbar />
        <div className="container mx-auto py-10 px-6">
            <h3 className="text-xl lg:text-3xl text-customBlue font-extrabold mb-6 lg:mb-10">ABOUT GREEN ACRES HOSPITAL</h3>
            <p className='text-sm lg:text-base mb-8'>
                At Green Acres Hospital, we pride ourselves on providing exceptional service to our patient. From check-in to check-out, our dedicated team is here to make sure you have a good experience whenever you visit our hospital, we are passionate about our patients. Below are some views of what you would be expecting whenever you visit us
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Our Compound and Reception</h4>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/sZrz517SLcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Our Theatre</h4>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/BBk8-YGXz0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Our Consulting Room</h4>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/BgdzMfZ7CK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Our Laboratory</h4>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/AtbE4YQiiS0?si=1NHavX8hluGLo9vx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Our Labour Ward</h4>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/qB50jSyBfN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>



            <h1 className="text-3xl font-bold text-customBlue mb-4">Image Gallery</h1>
            <p className='text-sm lg:text-base mb-12'>
                Click to preview image
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="cursor-pointer h-40 w-56"
                    onClick={() => openImage(image)}
                    width={200}
                    height={200}
                />
                ))}
            </div>
            {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
                <div className="max-w-xl w-full bg-white p-4 rounded-lg shadow-lg">
                    <Image height={200} width={200} className='w-full h-full' src={selectedImage} alt="Selected Image" />
                    <button
                    className="absolute top-0 right-0 m-4 text-white bg-red-500 px-3 py-2 rounded-md"
                    onClick={closeImage}
                    >
                    Close X
                    </button>
                </div>
                </div>
            )}
        </div>
        <Footer />
    </div>
  );
};

export default GalleryPage;
