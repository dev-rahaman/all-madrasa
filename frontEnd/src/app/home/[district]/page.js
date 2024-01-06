import Link from "next/link";
import Image from "next/image";
import { Title } from "@/app/Component/Componnts";

export const fetchMadrasaInformation = async ({ district }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/${district}`);
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export async function loadPosts(district) {
  const res = await fetch(`http://localhost:3000/api/${district}`);
  return res.json();
}

const FindByDistrict = async ({ params }) => {
  const district = params.district;
  const result = fetchMadrasaInformation(district);
  const data = await loadPosts(district);

  return (
    <div>
      <Title
        heading={`${district} er সব মাদ্রাসাসমূহ`}
        paragraph={
          "We simplify website creation and launch with a few easy steps. Our goal is a stress-free experience, ensuring your new site comes together effortlessly."
        }
      />
      <div className="flex items-center justify-center flex-wrap gap-5">
        {data &&
          data?.result.map((item) => (
            <>
              <div className="m-5 flex items-center justify-center flex-wrap gap-5 my-5">
                <Link
                  href={`/home/${item.madrasaName.replace(/ /g, "-")}`}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <Image
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="/image1.jpg"
                    width={160}
                    height={100}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ea8b26] dark:text-white">
                      {item.madrasaName}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.madrasaDescription.slice(0, 100)}...
                    </p>
                  </div>
                </Link>
              </div>
            </>
          ))}
      </div>{" "}
    </div>
  );
};

export default FindByDistrict;
