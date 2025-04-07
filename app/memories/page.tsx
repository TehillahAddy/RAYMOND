import Image from "next/image";
import Link from "next/link";

export default function MemoriesPage() {
  return (
   
    <div className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#e4e9ec] to-white text-gray-900 font-sans">
      <div className="relative h-[280px] sm:h-[400px] w-full overflow-hidden">
        <Image
          src="/images/18.jpg" // change to any header image you want
          alt="Memory header"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">Memories</h1>
          <p className="text-base sm:text-lg mt-2 font-light">Share your story or tribute to Raymond</p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:px-8 animate-fadeIn space-y-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block text-sm text-blue-600 hover:underline transition duration-200"
        >
          ← Back to Home
        </Link>

        {/* Description and Form */}
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Share a Memory</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have a story, prayer, tribute, or moment to share about Raymond, we welcome you to write it below.
            Your words will help preserve his legacy and bring comfort to all who loved him.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Write your memory..."
              className="w-full px-4 py-2 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      
      
            <footer className="bg-gray-50 border-t mt-16 py-6 px-4 text-center text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} In Loving Memory of Raymond Nii Antie Orleans Addy.
              </p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <span>Designed by</span>
                <a
                  href="https://lionheart-seven.vercel.app/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline font-medium"
                >
                  Lionheart Tech
                  <Image
                      src="/images/logs.png"
                    alt="Lionheart Tech Logo"
                    width={23}
                    height={23}
                    className="rounded-sm"
                  />
                </a>
              </div>
            </footer>
    </div>
  );
}
