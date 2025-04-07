import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const galleryItems = [
    { type: "image", src: "/images/1.jpeg", alt: "Raymond at the beach" },
    { type: "video", src: "/images/vid.mp4", alt: "Raymond speaking" },
    { type: "image", src: "/images/2.jpeg", alt: "Raymond smiling" },
    { type: "image", src: "/images/3.jpeg", alt: "Raymond with family" },
    { type: "video", src: "/images/vid1.mp4", alt: "Raymond with friends" },
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
    { type: "image", src: "/images/ak.jpeg", alt: "Raymond at church event" },
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
    { type: "video", src: "/images/vid4.mp4", alt: "Raymond laughing" },
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

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 sm:px-8 animate-fadeIn space-y-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block text-sm text-blue-600 hover:underline transition duration-200"
        >
          ← Back to Home
        </Link>

        {/* Gallery Grid */}
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
