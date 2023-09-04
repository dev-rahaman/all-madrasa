const Title = ({ heading, headingStyle, headingStyle2, paragraph }) => {
  return (
    <div className="flex items-center justify-center flex-col bg4">
      <div className="lg:w-1/3 mx-5 text-center">
        <h2 className="text-4xl font-extrabold my-5">
          <span className="text-[#ea8b26]">{headingStyle2}</span>
          {heading} <span className="text-[#ea8b26]">{headingStyle}</span>
        </h2>
        <p className="p-2">{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;
