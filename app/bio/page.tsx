import Image from "next/image";
import Link from "next/link";

export default function BioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#e4e9ec] to-white text-gray-900 font-sans">
      <div className="relative h-[280px] sm:h-[400px] w-full overflow-hidden">
        <Image
          src="/images/IMG_1479.jpg"
          alt="Raymond Addy"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">His Story</h1>
          <p className="text-base sm:text-lg mt-2 font-light">A life of love, impact & grace</p>
        </div>
      </div>

      {/* Bio Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:px-8 animate-fadeIn space-y-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block text-sm text-blue-600 hover:underline transition duration-200"
        >
          ← Back to Home
        </Link>

        {/* Bio Text */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Biography</h2>
          <p className="text-gray-700 leading-relaxed">
            Raymond Nii Antie Orleans Addy was born in 1993, a radiant light in the lives of all who knew him.
            From a young age, Raymond displayed a deep sense of compassion, creativity, and intelligence that
            left lasting impressions wherever he went.
          </p>
          <p className="text-gray-700 leading-relaxed">
            He pursued his education with excellence and carried his passion into every endeavor—academic, professional, or personal.
            Raymond was not just a son, brother, or friend; he was a source of strength, laughter, and boundless kindness.
          </p>
          <p className="text-gray-700 leading-relaxed">
            His love for people, his infectious smile, and his genuine spirit made him a cornerstone in the lives of many.
            Whether through his words or actions, Raymond consistently uplifted others, demonstrating the heart of a true leader and servant.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Though his time with us was brief, the impact he made is eternal. He lives on in our stories, our hearts, and the legacy of love he left behind.
          </p>
        </section>

        {/* Closing Image */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/ray1.jpeg"
            alt="Raymond smiling"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
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
