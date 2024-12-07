import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head';
import Image from 'next/image';
import Loader from '@/components/Loader';

const services = [
  {
    title: '3D/4D Ultrasound scan',
    image: '/img9.png',
    description: 'Enhance medical decision-making with our comprehensive 3D/4D Ultrasound Scan, providing detailed evaluations of embryos, fetuses, and conditions like uterine fibroids for improved anatomical insights.',
  },
  {
    title: 'Laboratory services',
    image: '/img7.png',
    description: 'Experience exceptional diagnostic services at our state-of-the-art medical laboratory. Our dedicated team of skilled Medical Laboratory Scientists ensures prompt, accurate, and thorough care for our patients.',
  },
  {
    title: 'Obstetrics & Gynaecare Clinic',
    image: '/img13.png',
    description: 'We prioritize expert care for women during pregnancy, childbirth, and the diagnosis/treatment of reproductive organ diseases. Our specialized services also cover menopause, hormone issues, contraception, and infertility.',
  },
  {
    title: 'Multi Specialty Clinic',
    image: '/img8.png',
    description: 'Experience thorough physical examinations in a sterile environment, including vital sign assessments, consultations with top cardiologist, endocrinologist, pulmonologist, neurologist, gastroenterologist, paediatrician, oncologist etc and exceptional diagnostic services.',
  },
  {
    title: 'Surgery',
    image: '/newImg1.jpeg',
    description: 'Green Acres Hospital: Prioritizing safety, comfort, and personalized care. Our skilled surgical team ensures excellent procedures and comprehensive post-operation support for a positive patient experience.',
  },
  {
    title: 'Cervical Cancer Screening/Colposcopy Clinic',
    image: '/img20.png',
    description: 'Experience our unique colposcopy practice for women with positive cervical cancer screening results (Pap smear, liquid-based cytology, HPV testing).We offer conservative treatment - LEEP/LLETZ or electrocoagulation  of any such abnormalities detected at colposcopy. We also provide HPV vaccination for eligible females.',
  },
];

const ServicesPage = () => {

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />
    }

  return (
    <div>
        <Head>
            <title>Green acres hospital - Our services</title>
        </Head>
        <Navbar />
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-xl lg:text-3xl text-customBlue font-extrabold mb-6 lg:mb-10">Our Services</h2>
            <p className='text-sm lg:text-base mb-10'>
                At Green Acres Hospital, we take pride in delivering exceptional services to our patients. From check-in to check-out, our dedicated team is committed to providing you with the best experience during every visit to our facility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image width={200} height={200} src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                    <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default ServicesPage;
