import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#e4e9ec] to-white text-gray-900 font-sans">
      <div className="relative h-[300px] sm:h-[450px] w-full overflow-hidden">
        <Image
          src="/images/15.jpg"
          alt="Raymond Addy"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-wide">
            In Loving Memory
          </h1>
          <h2 className="text-lg sm:text-2xl mt-2 font-light">
            Raymond Nii Antie Orleans Addy <br />
            <span className="tracking-wide">1993 – 2025</span>
          </h2>
        </div>
      </div>

      <nav className="bg-white shadow-sm px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-center sm:justify-between items-center border-b sticky top-0 z-10">
        <Link href="/" className="text-xl font-semibold font-serif text-gray-700 mb-2 sm:mb-0">
          Forever LOVED!
        </Link>

        <ul className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-sm sm:text-lg text-gray-700 font-medium font-serif text-left">
          <li><Link href="/" className="transition">Home</Link></li>
          <li>|</li>
          <li><Link href="/bio" className="transition">Bio</Link></li>
          <li>|</li>
          <li><Link href="/tributes" className="hover:text-blue-500 transition">Tributes</Link></li>
          <li>|</li>
          <li><Link href="/hymns" className="hover:text-blue-500 transition">Hymns</Link></li>
          <li>|</li>
          <li><Link href="/gallery" className="hover:text-blue-500 transition">Gallery</Link></li>
        </ul>
      </nav>



      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:px-12 space-y-16">
        {/* Funeral Info */}
        <section className="animate-fadeIn space-y-4">
          <h3 className="text-2xl font-serif font-semibold">Funeral & Thanksgiving</h3>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-gray-800 space-y-2 border">
            <p><strong>Venue:</strong> 27 Official Street, Adabraka Odorna, Near Sahara Park – Accra</p>
            <p><strong>Date:</strong> Saturday, 12th April, 2025</p>
            <p><strong>Thanksgiving:</strong> Sunday, 13th April, 2025 at ICGC Tephillah Assembly, Madina Christleads Missions behind Oman FM @ 1:00PM</p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Order of Service */}
        <section className="animate-fadeIn space-y-6">
          <h3 className="text-2xl font-bold border-b pb-2 font-serif">Order of Service</h3>

          <div>
            <h4 className="text-lg font-semibold mb-2">Officiating Ministers</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
              <li>Most Rev. (Rtd.) Nicholas Tetteh</li>
              <li>Rev. (Rtd.) Theophilus Addy</li>
              <li>Rev. Nii Awuley Addico</li>
              <li>Apostle Henry Frempong Dosoo</li>
              <li>Rev. Nii Ako Nsakie</li>
              <li>Rev. Samuel Ako-Otchere Johnson</li>
              <li>Pastor Victor Dennis Addy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-6">Part I – Burial Service</h4>
            <ul className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
              <li>Words of Comfort</li>
              <li>Opening Prayer</li>
              <li>Praise and Worship</li>
              <li>Hymn – No. 1</li>
              <li>Reading of Biography and Tributes</li>
              <li>Song Ministration / Hymn – No. 2</li>
              <li>Sermon</li>
              <li>Prayer for the Family</li>
              <li>Offering / Praises</li>
              <li>Special Guests & Dignitaries Acknowledgment</li>
              <li>Hymn – No. 3</li>
              <li>Benediction</li>
              <li>Recession / Hymn – No. 4</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-6">Part II – Graveside</h4>
            <ul className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
              <li>Procession / Hymn</li>
              <li>Prayer</li>
              <li>Lowering of Casket</li>
              <li>Scripture Reading</li>
              <li>Hymn – No. 5</li>
              <li>Prayer of Committal</li>
              <li>Closing Prayer</li>
              <li>Laying of Wreaths</li>
              <li>Vote of Thanks</li>
              <li>Benediction / Departure</li>
            </ul>
          </div>
        </section>
      </main>
      <section className="bg-gray-50 py-12 px-6 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-serif mb-4">
            HEARTFELT APPRECIATION
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            The entire family of the late <span className="font-medium">Raymond Nii Antie Orleans Addy</span> wish to express our heartfelt gratitude
            to all friends and sympathizers for their time, prayer support, words of encouragement, donations,
            and presence during our bereavement.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mt-4 leading-relaxed">
            We are extra grateful.
          </p>
          <p className="text-gray-800 font-medium mt-6 italic">
            May the Almighty God richly bless you.
          </p>
        </div>
      </section>

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
          </a>
          <a href="https://drive.google.com/file/d/1gsSjwnrh0v2e1_p0lsZdofhty0TsCcKQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logs.png"
              alt="Lionheart Tech Logo"
              width={49}
              height={49}
              className="rounded-sm cursor-pointer"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
