import React from 'react';

const withClass = (WrappedComponent, className) => {
  // Funkcja zwaraca komponent funkcyjny
  return props => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
  )
};

export default withClass;