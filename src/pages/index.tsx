import PostsList from '../features/base-page/components/PostsList'
import React from 'react';
import Carousel from '../components/elements/Carousel';

const carousel_parts = [
  <PostsList />,
  <PostsList />,
  <PostsList />,
  <PostsList />,
  <PostsList />,
  <PostsList />,
  <PostsList />,
  <PostsList />,
];


export default function Home() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
            <Carousel carousel_parts={carousel_parts} />
          </div>
      </div>
    </div>
  )
}
