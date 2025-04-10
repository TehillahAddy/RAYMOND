import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const galleryItems = [
    { type: "image", src: "/images/1.jpeg", alt: "Raymond at the beach" },
    { type: "video", src: "/images/vid.mp4", alt: "Raymond speaking" },
    { type: "image", src: "/images/2.jpeg", alt: "Raymond smiling" },
    { type: "image", src: "/images/3.jpeg", alt: "Raymond with family" },
    { type: "video", src: "/images/call.mp4", alt: "Raymond with friends" },
    { type: "image", src: "/images/4.jpeg", alt: "Raymond walking" },
    { type: "image", src: "/images/5.jpeg", alt: "Raymond in conversation" },
    { type: "image", src: "/images/6.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/7.jpg", alt: "Raymond laughing" },
    { type: "image", src: "/images/9.jpg", alt: "Raymond candid moment" },
    { type: "image", src: "/images/11.jpg", alt: "Raymond portrait" },
    { type: "image", src: "/images/12.jpg", alt: "Raymond walking" },
    { type: "image", src: "/images/13.jpg", alt: "Raymond in conversation" },
    { type: "image", src: "/images/14.jpg", alt: "Raymond at church event" },
    { type: "image", src: "/images/15.jpg", alt: "Raymond laughing" },
    { type: "image", src: "/images/16.jpg", alt: "Raymond candid moment" },
    { type: "image", src: "/images/17.jpg", alt: "Raymond portrait" },
    { type: "image", src: "/images/18.jpg", alt: "Raymond walking" },
    { type: "image", src: "/images/air.jpeg", alt: "Raymond in conversation" },
    { type: "image", src: "/images/k.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/ka.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/l.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/r.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/t.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/as.jpeg", alt: "Raymond laughing" },
    { type: "image", src: "/images/br.jpeg", alt: "Raymond candid moment" },
    { type: "image", src: "/images/car.jpeg", alt: "Raymond portrait" },
    { type: "image", src: "/images/churh.jpeg", alt: "Raymond walking" },
    { type: "image", src: "/images/cos.jpeg", alt: "Raymond in conversation" },
    { type: "image", src: "/images/cre.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/dad2.jpeg", alt: "Raymond laughing" },
    { type: "image", src: "/images/dr1.jpeg", alt: "Raymond candid moment" },
    { type: "image", src: "/images/dru.jpeg", alt: "Raymond portrait" },
    { type: "image", src: "/images/elf.jpeg", alt: "Raymond walking" },
    { type: "image", src: "/images/fly.jpeg", alt: "Raymond in conversation" },
    { type: "image", src: "/images/fri.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/gij.jpeg", alt: "Raymond laughing" },
    { type: "image", src: "/images/hn.jpeg", alt: "Raymond candid moment" },
    { type: "image", src: "/images/iu.jpeg", alt: "Raymond portrait" },
    { type: "image", src: "/images/me.jpeg", alt: "Raymond walking" },
    { type: "image", src: "/images/q.jpeg", alt: "Raymond in conversation" },
    { type: "image", src: "/images/ray1.jpeg", alt: "Raymond at church event" },
    { type: "image", src: "/images/ru.jpeg", alt: "Raymond laughing" },
    { type: "image", src: "/images/sc.jpeg", alt: "Raymond candid moment" },
    { type: "image", src: "/images/steph.jpeg", alt: "Raymond portrait" },
    { type: "image", src: "/images/sui.jpeg", alt: "Raymond walking" },
    { type: "image", src: "/images/w.jpeg", alt: "Raymond in conversation" },
    { type: "image", src: "/images/wi.jpeg", alt: "Raymond at church event" },
    { type: "video", src: "/images/vid2.mp4", alt: "Raymond laughing" },
  ];


  return (

    <div className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#e4e9ec] to-white text-gray-900 font-sans">
      <div className="relative h-[280px] sm:h-[400px] w-full overflow-hidden">
        <Image
          src="/images/13.jpg"
          alt="Gallery"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">Gallery</h1>
          <p className="text-base sm:text-lg mt-2 font-light">Moments forever cherished</p>
        </div>
      </div>

      <nav className="bg-white shadow-sm px-4 sm:px-6 py-3 flex justify-between items-center border-b sticky top-0 z-10">
  <Link href="/" className="text-lg sm:text-xl font-semibold font-serif text-gray-700 whitespace-nowrap">
    Forever LOVED!
  </Link>

  <div className="overflow-x-auto max-w-full">
    <ul className="flex items-center gap-3 sm:gap-5 text-sm sm:text-base text-gray-700 font-medium font-serif whitespace-nowrap">
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
  </div>
</nav>


      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 sm:px-8 animate-fadeIn space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-md transition duration-300 hover:scale-[1.02]"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <video
                  controls
                  className="w-full h-auto object-cover"
                  poster="/images/video-thumbnail.jpg" // optional: a fallback thumbnail
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
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
          <a href="https://drive.google.com/file/d/17Lvae1rFgRx1akJDdeXoipFDOSN_EeBY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
