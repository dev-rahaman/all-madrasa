import Link from "next/link";

const Porik = () => {
  return (
    <div className="flex items-center justify-center  flex-wrap gap-5 my-20">
      <div className="bg-[url('/dini-ilm.jpg')] bg-center bg-cover flex items-center justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#ea8b26]  dark:text-[#ea8b26] ">
          Dawa
        </h5>
        <p className="mb-3 font-normal text-white dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-[#ea8b26]  hover:underline"
        >
          Ipta
        </Link>
      </div>
      <div className="bg-[url('/dini-ilm.jpg')]  bg-center bg-cover flex items-center justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#ea8b26]  dark:text-[#ea8b26] ">
          Dwra(Master)
        </h5>
        <p className="mb-3 font-normal text-white dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-[#ea8b26]  hover:underline"
        >
          Dawra
        </Link>
      </div>
      <div className="bg-[url('/dini-ilm.jpg')]  bg-center bg-cover flex items-center justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#ea8b26]  dark:text-[#ea8b26] ">
          Need a help in Claim?
        </h5>
        <p className="mb-3 font-normal text-white dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-[#ea8b26]  hover:underline"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Porik;
