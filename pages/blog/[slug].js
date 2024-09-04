import React from 'react';
import { useRouter } from 'next/router';
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { AiOutlineClockCircle, AiOutlineEdit } from 'react-icons/ai';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Image from 'next/image';

const client = createClient({
  space: "e8ks3xe9z0q5",
  accessToken: "2hZTK-k-6Gv057xBIOKVaLNdDKh8jc7n_PmuOWnoBUc",
});

const options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const { url, description } = node.data.target.fields.file;
      return (
        <div className="w-full h-[30vh] lg:h-[40vh] py-4">
          <Image layout='fill' src={url} alt={description} className="w-[400px] h-full object-cover" />
        </div>
      );
    },
    'heading-2': (_, children) => <h2 style={{ fontSize: '24px', marginBottom: '5px' }}>{children}</h2>,
    'heading-3': (_, children) => <h3 style={{ fontSize: '18.72px', marginBottom: '5px' }}>{children}</h3>,
    'heading-4': (_, children) => <h4 style={{ fontSize: '16px', marginBottom: '5px' }}>{children}</h4>,
    'heading-5': (_, children) => <h5 style={{ fontSize: '13.28px', marginBottom: '5px' }}>{children}</h5>,
    'heading-6': (_, children) => <h6 style={{ fontSize: '10.72px', marginBottom: '5px' }}>{children}</h6>,
  },
};

const BlogDetails = ({ blogPost }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blogPost) {
    return <div>Error: Blog post not found</div>;
  }

  const { thumbnail, title, author, article, date } = blogPost.fields;

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center items-center h-56 lg:h-96">
          <div className="relative w-full h-full">
            <Image 
              src={`https:${thumbnail.fields.file.url}`}
              alt={thumbnail.fields.file.title}
              className="object-cover"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-6 w-full flex justify-end items-center space-x-4 bg-blue-50 p-4">
            <p className="flex items-center text-gray-600 text-sm lg:text-base">
              <AiOutlineClockCircle className="w-5 h-5 mr-2" /> {date}
            </p>
            <p className="flex items-center text-gray-600 text-sm lg:text-base">
              <AiOutlineEdit className="w-5 h-5 mr-2" /> {author}
            </p>
          </div>
          <div className='py-10 px-8'>
            <h2 className="text-lg lg:text-2xl font-bold mb-6">{title}</h2>
            <div className="prose max-w-none">{documentToReactComponents(article, options)}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: 'blogPost',
  });

  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false, // Ensure fallback is set to false for static export
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': params.slug
    });

    if (!response.items.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blogPost: response.items[0],
      },
    };
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return {
      notFound: true,
    };
  }
}

export default BlogDetails;
