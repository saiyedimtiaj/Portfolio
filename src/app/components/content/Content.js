"use client";

const Content = ({ overview }) => {
  return (
    <div
      className="prose text-white"
      dangerouslySetInnerHTML={{ __html: overview }}
    />
  );
};

export default Content;
