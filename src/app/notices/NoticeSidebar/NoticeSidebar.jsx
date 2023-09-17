import Link from "next/link";

export const NoticeSearch = () => {
  return (
    <div>
      <div className="bg-gray-200 p-5 rounded lg:w-[350px]">
        <h2 className="text-xl font-bold text-[#ea8b26]">Find a Notice</h2>
        <div className="flex ">
          <input
            type="text"
            id="title"
            name="search"
            required
            className="w-full"
          />
          <button className="bg-[#ea8b26] px-2">Search</button>
        </div>
      </div>
    </div>
  );
};

export const ResentNotice = () => {
  return (
    <div className="lg:w-[350px] space-y-2 p-5 mt-3 bg-gray-50 rounded border">
      <h2 className="text-xl font-bold text-[#ea8b26]">Resent Notice</h2>
      <Link
        href={"#"}
        className="block border-b border-[#ea8b26] border-dashed"
      >
        EXPLORING THE FRONTIERS OF ARTIFICIAL INTELLIGENCE:
      </Link>
      <Link
        href={"#"}
        className="block border-b border-[#ea8b26] border-dashed"
      >
        EXPLORING THE FRONTIERS OF ARTIFICIAL INTELLIGENCE:
      </Link>
      <Link
        href={"#"}
        className="block border-b border-[#ea8b26] border-dashed"
      >
        EXPLORING THE FRONTIERS OF ARTIFICIAL INTELLIGENCE:
      </Link>
      <Link
        href={"#"}
        className="block border-b border-[#ea8b26] border-dashed"
      >
        EXPLORING THE FRONTIERS OF ARTIFICIAL INTELLIGENCE:
      </Link>
      <Link href={"#"}>
        EX blockPLORING THE FRONTIERS OF ARTIFICIAL INTELLIGENCE:
      </Link>
    </div>
  );
};

export const NoticeCategory = () => {
  return (
    <div className="lg:w-[350px] space-y-2 p-5 mt-3 bg-gray-50 rounded border">
      <h2 className="text-xl font-bold text-[#ea8b26]">Notice Category</h2>
      <Link href={""} className="block">
        EXPLORING
      </Link>
      <Link href={""} className="block">
        INTELLIGENCE
      </Link>
      <Link href={""} className="block">
        ARTIFICIAL
      </Link>
      <Link href={""} className="block">
        FRONTIERS
      </Link>
      <Link href={""} className="block">
        ARTIFICIAL
      </Link>
      <Link href={""} className="block">
        FRONTIERS
      </Link>
      <Link href={""} className="block">
        ARTIFICIAL
      </Link>
      <Link href={""} className="block">
        FRONTIERS
      </Link>
    </div>
  );
};

export const NoticeTags = () => {
  return (
    <div className="lg:w-[350px] space-y-2 p-5 mt-3 bg-gray-50 rounded border">
      <h2 className="text-xl font-bold text-[#ea8b26]">Notice Tags</h2>
      <div className="flex flex-wrap gap-2 ">
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          EXPLORING
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          INTELLIGENCE
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          ARTIFICIAL
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          FRONTIERS
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          ARTIFICIAL
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          FRONTIERS
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          ARTIFICIAL
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          RATIFY
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          FRONTIERS
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          AI in Autonomous Vehicles
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          Artificial Intelligence
        </Link>
        <Link
          href={""}
          className="block border px-2 text-gray-500 border-black"
        >
          Artificial
        </Link>
      </div>
    </div>
  );
};
