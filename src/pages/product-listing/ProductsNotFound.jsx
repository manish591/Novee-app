import React from 'react';

const ProductNotFound = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        paddingBlock: '8rem',
      }}>
      <h1>No Products Found</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--clr-warning)' }}>
        Apply Different Filter
      </p>
    </div>
  );
};

export { ProductNotFound };
