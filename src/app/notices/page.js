import Image from "next/image";
import Link from "next/link";

const NoticePage = () => {
  return (
    <div className="flex items-center justify-center flex-wrap ">
      <div className="flex items-center justify-center flex-col w-[300px] p-6 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          src="https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
          alt="Jamia Rashidia Feni"
          width={50}
          height={50}
          className="text-center"
        ></Image>
        <Link href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#ea8b26] dark:text-white">
            Need a help in Claim?
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default NoticePage;
