const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between  flex-col  lg:px-10 py-12 rounded-[20px] w-[70%]  mx-auto my-0 feedback-card  ">
     <div className="flex flex-col justify-center items-center">
      <img src={img} alt={name} className="h-[100px] w-[100px] object-cover rounded-full" />
      <div className="flex flex-col items-centerml-4 gap-x-6">
        <h4 className="font-poppins font-semibold text-[20px] text-black text-center">
          {name}
        </h4>
        <p className="font-poppins font-semibold text-[20px] text-black text-center">
          {title}
        </p>
      </div>
    </div>
    <img
      src="/semicolon-open.svg"
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins tex-[15px] font-light lg:text-[18px] italic leading-[32.4px] my-10">
      {content}
    </p>

    <img
      src="/semicolon-close.svg"
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain mr-0 ml-[98%]"
    />

   
  </div>
);

export default FeedbackCard;
