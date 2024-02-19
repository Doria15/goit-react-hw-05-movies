import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div class={css.loaderContainer}>
      <ClimbingBoxLoader color="rgba(223, 92, 48, 1)" />
    </div>
  );
};
