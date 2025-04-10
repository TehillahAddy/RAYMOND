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
              <li>|</li>
              <li><Link href="/memories" className="hover:text-blue-500 transition">Memories</Link></li>
            </ul>
          </nav>

      {/* Bio Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:px-8 animate-fadeIn space-y-10">
        {/* Bio Text */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Biography</h2>
          <p className="text-gray-700 leading-relaxed">
            "What counts in life is not the mere fact that we have lived. It is what difference we made to the lives of others that will determine the significance of the life we live." — Nelson Mandela.
            "So, teach us to number our days, that we may apply our hearts unto wisdom." — Psalm 90:12 (KJV).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we gather with heavy hearts to bid farewell to our beloved grandson, son, nephew, cousin, and friend, Raymond Nii Antie Orleans Addy, who was called to glory on Thursday, 20th February 2025. We take solace in the belief that he now rests peacefully in the loving arms of our Lord Jesus Christ.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Raymond was born on 19th December 1993 in Accra to Mr. Sylvanus Nii Obuama Orleans Addy, from Otuokpai-Gbese, Accra, now residing in the United States, and the late Mrs. Gloria Comfort Addy (née Onouha), from Abia State, Nigeria. Raymond, affectionately called Chukwu-Emeka by his late mother, began his educational journey at Victory Presbyterian Basic School, Adentan-Frafraha (1999–2008). He then attended Accra High School, where he completed his secondary education in 2011. He went on to pursue a Diploma in Journalism at the Ghana Institute of Journalism (GIJ) in 2018, followed by a bachelor’s degree in journalism in 2020.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From an early age, Raymond excelled in his studies and displayed remarkable artistic skills, effortlessly drawing portraits, natural landscapes, and imaginative scenes. His creativity extended beyond fine art into music, acting, and advocacy. Despite being born with sickle cell disease, Raymond lived with resilience and determination. He embraced life fully, refusing to let his condition define his potential. His strength and ambition propelled him forward, inspiring others who faced similar health challenges. He aspired to becoming a top-notch business tycoon, leaving a lasting impression on those that knew him.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Raymond gained professional experience through his internship and National Service at FedEx Corporation. However, his true passion lay in the creative arts, particularly acting and social media content creation. In his last few months, he became well known for his skits and short sketches on TikTok and Facebook, using humor to connect with audiences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Raymond was raised in the fear and love of the Lord. He accepted Christ at a young age at Logos Rhema Community Assembly and underwent both Water and Holy Spirit Baptism at ICGC Family Temple, Haatso, where he played the percussions for the church choir. In his later years, he fellowshipped at ICGC Tephillah Assembly, Madina, under the leadership of his uncle, Pastor Victor Dennis Addy. His faith remained a pillar of strength throughout his life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            On 20th February 2025, at the age of 31, Raymond transitioned from this world, leaving behind a profound legacy of courage, kindness, and inspiration. His short but impactful life touched many—his family, church members, friends, community, and professional circles. Though we mourn his passing, we also celebrate a life well-lived—a life marked by purpose, resilience, and unwavering hope. His story will continue to inspire those who knew him, and his memory will forever be cherished.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold italic">
            Rest in Perfect Peace, Ray Orleans. Yaa Wo Ojogbann. Amen!
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
          </a>
          <a href="https://drive.google.com/file/d/1BQixw6hBqGzvg66ktxqJ6VsOen2AEFhV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
