import MadrasaPage from "../madrasapage/page";

export async function loadPosts() {
  const res = await fetch("http://localhost:3000/api/madrasainformation");
  return res.json();
}

const AllMadrasaOfBangladesh = async ({ params }) => {
  const data = await loadPosts();
  const encodedText = params.slug;
  const decodedText = decodeURIComponent(encodedText);
  const madrasaNameOfURL = decodedText.slice(23);
  const covertMadrasaNameOfURL = madrasaNameOfURL.replace(/-/g, " ");

  return (
    <div>
      <MadrasaPage
        data={data.result}
        covertMadrasaNameOfURL={covertMadrasaNameOfURL}
      />
    </div>
  );
};

export default AllMadrasaOfBangladesh;
