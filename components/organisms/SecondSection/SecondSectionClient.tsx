"use client";

type SecondSectionData = {
  urlImage: string;
};
type props = {
  data: SecondSectionData;
};

const SecondSectionClient: React.FC<props> = ({ data }) => {
  return (
    <section
      className={`
      flex justify-center items-center
      max-[1335px]:px-[100px]
      max-[1024px]:px-[20px]
      max-[768px]:flex-col max-[768px]:px-[15px] max-[768px]:mt-[200px]
      max-[480px]:px-[10px]
      max-[320px]:px-[8px]
    `}
    >
      <img
        src={data?.urlImage}
        alt="Large"
        className={`
        max-w-[550px] h-[719px] rounded-[50px] 
        max-[1335px]:max-w-[480px] max-[1335px]:h-auto max-[1335px]:rounded-[40px] max-[1335px]:mt-[0px]
        max-[1024px]:w-full max-[1024px]:h-auto max-[1024px]:rounded-[30px] max-[1024px]:mt-0
        max-[768px]:w-full max-[768px]:h-auto max-[768px]:rounded-[24px]
        max-[480px]:rounded-[20px]
        max-[320px]:rounded-[16px]
      `}
      />
    </section>
  );
};

export default SecondSectionClient;
