/* eslint-disable react/prop-types */
//
// import classNames from 'classnames';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const [feem, setFeem] = useState('layout');
  return (
    <div className={feem}>
      <button
        type="button"
        className="btn-link"
        onClick={() => setFeem((prev) => {
          if (prev === 'layout') {
            return 'layoutdark';
          }
          return 'layout';
        })}
      >
        Change theme
      </button>
      {children}
    </div>
  );
}
