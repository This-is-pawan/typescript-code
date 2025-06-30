"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";

const localImg = "/images/pexels-map.jpg";
const Img = "https://images.pexels.com/photos/2859369/pexels-photo-2859369.jpeg";
const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <div>
      <h1 className="text-4xl">ID: {id}</h1>

      <section className="flex gap-x-4 mt-4">
        <div>
          <Image
            src={localImg}
            alt="Local Map"
            width={400}
            height={200}
            priority
            className="w-auto h-auto object-v"
          />
          <h2>Local Image</h2>

          <div className="mt-4">
            <Image
              src={Img}
              alt="External Tour"
              width={400}
              height={200}
              className="object-cover w-auto h-auto"
            />

            <h2>External Image</h2>
          </div>
        </div>
      </section>

      <button className="bg-pink-400 p-2 rounded mt-4">
        <Link href="/tours">Back to Tour</Link>
      </button>
    </div>
  );
};

export default Page;
