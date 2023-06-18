import React from 'react';

const Loader = ({ className, isLoading }) => {
  return isLoading && <div className={className}></div>;
};

export default Loader;