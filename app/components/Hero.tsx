import Image from 'next/image';
import okrawithbox  from "@/app/images/boxwithokra.jpg"

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* Left Half */}
      <div className="flex-1 flex items-center justify-center bg-green-500 p-8">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome to Okra!
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-100">
            Okra is revolutionizing how we connect with [specific use case or mission]. 
            Explore the possibilities today!
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Half */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 ">
        <Image
          src={okrawithbox}
          alt="Okra"
          width={990}
          height={990}
          className="rounded-lg shadow-lg object-fit w-full h-auto md:w-auto"
        />
      </div>
    </section>
  );
}
