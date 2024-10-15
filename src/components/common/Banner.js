import React from 'react';
import { ListBanner } from 'styles/common/List-styled';

const Banner = ({ data, text }) => {
  return (
    <ListBanner style={{ backgroundImage: `url(${data})` }}>{text}</ListBanner>
  );
};

export default Banner;
