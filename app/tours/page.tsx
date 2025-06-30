// "use client";

import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";


type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function TourPage() {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  // console.log(data);

  return (
    <section>
      {/* <h1 className="text-3xl mb-3 bg-amber-800 text-white text-center p-2">Tours</h1> */}
      {data.map((tour, index) => {
        return (
          <Link
            href={`/tours/${tour.id}`}
            key={tour.id}
            className=" "
            title={tour.id}
          >
            <h2 className=" bg-amber-200 m-2 p-2  hover:bg-pink-400 transition 2s tracking-wide ">
              {`${index + 1}) ${tour.name}`}
            </h2>
          </Link>
        );
      })}
    </section>
  );
}
export default TourPage;
