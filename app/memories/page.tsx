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

      <nav className="bg-white shadow-sm px-6 py-3 flex justify-center sm:justify-between items-center border-b sticky top-0 z-10">
        <Link href="/" className="text-xl font-semibold font-serif text-gray-700 hidden sm:block">
          Forever LOVED!
        </Link>
        <ul className="nav-underline flex gap-4 sm:gap-6 text-base sm:text-lg text-gray-700 font-medium font-serif">
          <li><Link href="/" className="transition">Home</Link></li>
          <li>|</li>
          <li><Link href="/bio" className="transition">Bio</Link></li>
          <li>|</li>
          <li><Link href="/tributes" className="hover:text-blue-500 transition">Tributes</Link></li>
          <li>|</li>
          <li><Link href="/hymns" className="hover:text-blue-500 transition">Hymns</Link></li>
          <li>|</li>
          <li><Link href="/gallery" className="hover:text-blue-500 transition">Gallery</Link></li>
          <li>|</li>
          <li><Link href="/memories" className="hover:text-blue-500 transition">Memories</Link></li>
        </ul>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:px-8 animate-fadeIn space-y-10">
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
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block text-sm text-blue-600 hover:underline transition duration-200"
        >
          ← Back to Home
        </Link>
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
            <a href="https://drive.google.com/file/d/1Ze3D24o4VkXDn0lv043M25nsTawcjMcH/view?usp=sharing " target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/logs.png"
                alt="Lionheart Tech Logo"
                width={49}
                height={49}
                className="rounded-sm cursor-pointer"
              />
            </a>
          </a>
        </div>
      </footer>
    </div>
  );
}
