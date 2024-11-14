import React from 'react';
import './Container.scss';
import { IContainerProps } from '../../interfaces';

const Container: React.FC<IContainerProps> = ({ children, className = '' }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;