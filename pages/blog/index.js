import React, { useState, useEffect } from 'react';
import { createClient } from "contentful";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Loader from '@/components/Loader';

const client = createClient({
  space: "e8ks3xe9z0q5",
  accessToken: "2hZTK-k-6Gv057xBIOKVaLNdDKh8jc7n_PmuOWnoBUc",
});

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await client.getEntries({ content_type: 'blogPost' });
      setBlogPosts(response.items);
    };
    fetchBlogPosts();
  }, []);

  console.log("blog posts", blogPosts);

  function truncateText(text, maxWords) {
    const words = text.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    } else {
        return text;
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div>
        <Head>
            <title>Green acres hospital - Explore our blog</title>
        </Head>
        <Navbar />
        <div className='py-10 px-8'>
            <h3 className="text-xl lg:text-3xl text-customBlue font-extrabold mb-6 lg:mb-10">Blog Page</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {blogPosts.map(post => (
                    <div key={post.sys.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image 
                        src={`https:${post.fields.thumbnail.fields.file.url}`}
                        alt={`Blog image thumbnail`}
                        className="w-full h-48 object-cover"
                        height={200}
                        width={200}
                    />
                    <div className="p-4">
                        <p className="text-base lg:text-lg font-semibold mb-2">{truncateText(post.fields.title, 12)}</p>
                        <Link href={`/blog/${post.fields.slug}`} className='text-blue-600'>Read article</Link>
                    </div>
                    </div>
                ))}
            </div>

        </div>
        <Footer />
    </div>
  );
};

export default BlogPage;
