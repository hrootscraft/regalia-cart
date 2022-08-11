import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Regalia",
  description: "We sell the best products for reasonable prices",
  keywords: "home decor, buy home decor, decor, home, furniture",
};

export default Meta;
