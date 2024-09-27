import React from 'react';
import { ListBanner } from 'styles/common/List-styled';

const Banner = ({data, text}) => {
  return <ListBanner backgroundImage = {data}>{text}</ListBanner>;
};

export default Banner;
