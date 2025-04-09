import Image from "next/image";
import Link from "next/link";

export default function TributePage() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#e4e9ec] to-white text-gray-900 font-sans">
      <div className="relative h-[280px] sm:h-[400px] w-full overflow-hidden">
        <Image
          src="/images/IMG_1479.jpg"
          alt="Raymond Nii Antie Orleans Addy"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">Tributes</h1>
          <p className="text-base sm:text-lg mt-2 font-light">Words of love from those whose lives he touched</p>
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

      {/* Tributes */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:px-8 animate-fadeIn space-y-10">
        {/* Tribute by Father */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by Father</h2>
          <p className="text-gray-700 leading-relaxed">
            As a father, I am heartbroken to bid farewell to my beloved son, Raymond Nii Antie Orleans Addy, but I will forever cherish the moments we shared together. Your spirit will live on, in my heart, Pastor Ray as I affectionately call him was a son, a friend, a confidant, and a source of immense pride to the whole family due to his entrepreneurial skills. Though your life on earth was brief you made good use of every opportunity that came your way and impacted many lives. Your kindness, and your unwavering spirit will forever be etched in my heart. Rest in peace, my beloved son. You will always be loved.
          </p>
        </section>
        {/* Image after Tribute by Father */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/dad.jpeg"
            alt="Raymond Addy with Father"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute by Siblings */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by Siblings</h2>
          <p className="text-gray-700 leading-relaxed">
            To our dearest brother, You were more than just a sibling – you were a guardian, a protector, and beacon of love in our lives. You cared deeply for each of us, always putting our well-being above your own. Your strength and determination to stay alive for us, even in the face of adversity, showed us the depth of your love and the courage of your spirit. You fought with everything you had, not just for yourself, but for the family you cherished so dearly. Your absence has left an emptiness in our hearts that words cannot fully describe. Yet, even in this void, your love continues to surround us, a reminder of the bond we shared and the memories we hold close. You were, and always will be deeply loved and cherished. Though you are no longer here in person, your spirit lives on every moment we shared, in every lesson you taught us, and in the love that will forever connect us. Rest peacefully, Ray. You may be gone from our sight, but you will never be gone from our hearts. Until we meet again, we will carry you with us, always.
          </p>
        </section>
        {/* Image after Tribute by Siblings */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/me.jpeg"
            alt="Raymond Addy with Siblings"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute by Cousins */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by Cousins</h2>
          <p className="text-gray-700 leading-relaxed">
            A shining star has faded, leaving an unfillable void in our lives. Our dear cousin, your passing has left us with a mix of emotions - sadness, nostalgia, and gratitude. You will always remember your bright smile, infectious laughter, and your unwavering optimism. Your heart grew with us, and your love touched every heart. Growing up with you was very interesting. Your memory will live on through the countless moments we shared, the laughter, the adventures, and the quiet moments when it was just us. We will cherish those memories forever. Ray, as we affectionately called him, was an industrious person. He was a businessman who could sell anything and everything. If you needed something, you would find it. In his later years, Raymond continued to transact business. Ray was always available for advice. I know and believe that Ray was a good friend to many, and he dedicated to taking his family to new heights. You will be deeply missed, but you, your light, and your legacy will never fade. FOREVER IN OUR HEARTS
          </p>
        </section>
        {/* Image after Tribute by Cousins */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/steph.jpeg"
            alt="Raymond Addy with Cousins"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute by ICGC Tephillah Assembly */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by ICGC Tephillah Assembly</h2>
          <p className="text-gray-700 leading-relaxed">
            Rev. 14:13 “And I heard a voice from heaven saying unto me, Write, Blessed are the dead which die in the Lord from henceforth: saith the Spirit, that they may rest from their labours; and their works do follow them” Rev. 14:13 (KJV) Raymond Nii Antie Orleans Addy affectionately called Ray by us, loved God and was part of the Tephillah Assembly of ICGC right from it’s inception, Ray has been very supportive through the thicks and thin of the ministry till his passing. He has been an ardent follower of Christ right from his childhood even earning the name Pastor Ray by some. As a skillful percussionist and congalist at our Assembly, his contribution to the ministry cannot be questioned. Ray was always punctual to service and assisted with all aspect of set-up before service began. He mingled and interacted freely with everyone especially with his warm smile. Raymond’s commitment was so palpable that the Head Pastor, who is also his biological uncle harboured plans (if God willed), of grooming him for Pastoral service due to his peculiar condition. Raymond availed himself for God’s service both physically and materially as much as it was within his means and strength. Raymond, as Apostle Paul says in 2 Timothy 4:7-8 we are assured that you have fought a good fight, you have finished your course and above all you have kept the faith. Despite all the worldly challenges you never departed from the faith that was instilled in you. We pray that you will find mercy before our LORD JESUS CHRIST, the righteous judge, to give unto you the crown of righteousness which is laid up for you and all who loves His appearing. Fare well our beloved Saint. May the angel of God guide you safely to your rest in Jesus, till we meet again. Adieu Ray. Shalom...
          </p>
        </section>
        {/* Image after Tribute by ICGC Tephillah Assembly */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/churh.jpeg"
            alt="Raymond Addy at ICGC"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute by Friends */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by Friends</h2>
          <p className="text-gray-700 leading-relaxed">
            Today, we all gather here to celebrate and honor the life of a gallant, relentless and ambitious young man. It felt like a dream when we all received the news Ray's demise. Even now, it still feels a nightmare, one we will all never wake up from. Mr. Orleans as we affectionately called him has been a bosom friend to all of us, with some of us knowing him from way back in 2008 from Senior High School days. As a student Protégé and fresher at Accra High School he mostly stayed out of trouble. His seemingly calm and gentle nature made him unique amongst his peers and soon won him a lot of admiration from his friends, teachers and all who came in contact with him. His impeccable communication skills and his keen interest in entrepreneurship got him to not only partner in business deals but also start his own businesses as well as manage other businesses for his clients. Ray was trustworthy, resilient and unwavering. When it comes to buying and selling of goods, no item was too big or small for him. For some of us who followed his socials, we looked forward to him tagging “Sold” to items he’s posted. Ray’s businesses, Alethia Online Market and Airrans Delivery Services were doing well even though it had its fair share of bad deals from unscrupulous people. If there is a lesson to be learnt from the life of Ray, it is to be kind to all others, live life to its fullest, keep hopes alive and never give up. We will always remember Ray for his consistent effort in trying to keep his businesses afloat even in the midst of challenges. If there was a way to contribute our lives together to extend yours none of us would have hesitated because for most of us gathered here today, we all know each other because of Ray. His maturity and love for peace and calm kept a lot of us together and we hope even in his absence we can maintain that peace and love he started to honor his memory. Without doubt Ray, you will be missed by many. Mr. Orleans, we know we can never find a friend just like you and the vacuum you've left in our hearts cannot be filled by any other. I believe friends go with words unspoken but our consolation is in the fact that “whether we live or die we live unto the lord”. Rest In Peace brother! Yaa wo ojogbann!!
          </p>
        </section>
        {/* Image after Tribute by Friends */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/girl.jpeg"
            alt="Raymond Addy with Friends"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute by Africa Sickle Cell Watch */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by Africa Sickle Cell Watch</h2>
          <p className="text-gray-700 leading-relaxed">
            For none of us liveth to himself, and no man dieth to himself. For whether we live, we live unto the Lord; and whether we die, we die unto the Lord: whether we live therefore, or die, we are the Lord’s. For to this end, Christ both died, and rose, and revived, that he be Lord both of the dead and living. Romans 14: 7-9(KJV) The late Raymond Nii Antie Orleans Addy, affectionately called RAY, was part of the Africa Sickle Cell Watch(ASCW) and was a champion as far as Sickle Cell Disease (SCD) was concerned. He was an advocate for our course in creating awareness on SCD, especially during school tours, and Legon goes red. He was a silent yet hardworking member of the organization. His main focus was the avoidance of the recycling of the SCD because he was a warrior and a sickle cell champion himself. Whenever we held discussions on our platform, he was concerned about the said warrior going through crises at that time. He will solely be missed, especially when it comes to advocacy in schools and educative interactions with the youth. RAY you were a warrior and a champion who fought till the end. Sleep well in the bosom of our Lord. Goodnight warrior, Goodbye champion. REST IN PERFECT PEACE!!!
          </p>
        </section>
        {/* Image after Tribute by Africa Sickle Cell Watch */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/ascw-image.jpg"
            alt="Raymond Addy with Africa Sickle Cell Watch"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute by Ghana Institute of Journalism Alumni */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by Ghana Institute of Journalism Alumni</h2>
          <p className="text-gray-700 leading-relaxed">
            Today, we come together not just to mourn, but to celebrate the life of someone truly special—our friend, brother, colleague, and son, Raymond. It’s hard to believe he’s gone, and even harder to put into words just how much he meant to us.... We’ve known Raymond since 2013, and from the start, we knew he was someone we’d never forget. He was one of those persons who stood out. He had a sharp wit that could make anyone laugh, a charm that made him instantly likable, and a way of turning even an ordinary day into something memorable. If you were around him, you were guaranteed a good time. It’s hard to find the right words to sum up a life so full of energy, humor, and kindness. And let’s not forget—Raymond was an amazing driver. Whether it was a long road trip or just a short ride, he had this effortless skill behind the wheel that made you feel safe. It was just who he was—steady, confident, and always in control. But, beyond the jokes, the laughter, and his talents, Raymond was a true friend. The kind of person who made life a little easier just by being in it. Losing him so soon is something none of us were prepared for. It is a heartbreak we never expected and the emptiness he leaves behind is impossible to fill. The memories we shared will never fade. He was more than a friend—he was family to many of us. And though he is no longer physically with us, his spirit, his laughter, and his kindness will live on in our hearts. Raymond, we’ll miss you more than words can say. But we’ll hold on to the memories, the laughter, and everything that made you who you were. Rest easy, our friend. You’ll never be forgotten.
          </p>
        </section>
        {/* Image after Tribute by Ghana Institute of Journalism Alumni */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/gij.jpeg"
            alt="Raymond Addy with GIJ Alumni"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute by Victory Presbyterian Church School Class of 2008 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by Victory Presbyterian Church School Class of 2008</h2>
          <p className="text-gray-700 leading-relaxed">
            Always calm, gentle, quiet but fun and very creative to be with. Raymond seemed reserved in class but when he opened his mouth to speak, there was a level of playfulness and intelligence which radiated from his mannerism. His responses to Teachers in class would quite often give us the giggles and make some wonder "wow, didn’t expect that fun comment from him". Some had the pleasure of living in the same Neighborhood (Adentan flats) with him of which their encounters were continuously warm, loving and fun filled homework sharing (if not more like chatters) moments. He would always think about the positive side of things and enjoy the happy moments together with us and celebrate his joyful progress in life. It was with great pleasure that as school mates from Victory, we found him active on social media: being busy with his business alongside a film production. Some said he was a superstar, an entrepreneur and so much more, all of which made us proud as a group to hear about. Little did we know that he wasn't going to be with us for that long. A week before his passing, most people came across further business advertisements from him alongside some skits. Some messaged him privately to pour out their congratulations and their regards. Sadly some had no response. We were devastated on hearing the news about your passing Ray and found it hard to believe. We had to send text messages and call you till we received no reply till date. Knowing and remembering how gracious Raymond was, we will lift up our heads even though we shed some tears and stay in support of his family. It's so sad you had to leave us this early, Ray. We believe you are in a better place, Ray. Until we meet again, rest well!
          </p>
        </section>
        {/* Image after Tribute by Victory Presbyterian Church School Class of 2008 */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/vic.jpeg"
            alt="Raymond Addy with VPCS Class of 2008"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute by Friends of the Creative Arts Industry */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute by Friends of the Creative Arts Industry</h2>
          <p className="text-gray-700 leading-relaxed">
            Today, we remember a friend, a colleague, and a true creative spirit who left an indelible mark in our hearts. It is great to see so many people here to honor our good friend and dear brother, Raymond Orleans Addy. His presence in our lives was a gift we will never forget. Today, we remember a friend, a colleague, and a true creative spirit who left an indelible mark in our hearts. It is great to see so many people here to honor our good friend and dear brother, Raymond Orleans Addy. His presence in our lives was a gift we will never forget. Even though we are of many different ages and have all kinds of jobs and interests, it is certain that we all have one thing in common, that is, our admiration of a man who never quits until the job is done. That man, of course, is Raymond Orleans Addy. From the very first moment he came into our creative circle, he brought with him not just talent, but an unwavering sense of respect, kindness, and generosity. He was more than just a team member; he was a partner in every sense of the word. Whether on set or behind the scenes, he always went above and beyond, showing up for us in ways that spoke volumes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We as creatives, always felt supported by his actions. He never hesitated to help, whether it was covering transportation costs or seeing to it that we are fine. One of his memories that would be really cherished is when he treated one of us to a meal at Papaye during the person’s birthday, it was clear that his thoughtfulness knew no bounds. His humility was evident when the person wanted to pay for his transportation fare on his own special day too, and he insisted on covering the fare himself, proving time and time again that he valued people over material things. He was not just a talented actor but also a reliable friend to producers, directors, and everyone he worked with. Always available, always willing, and always humble, he brought out the best in all of us, both professionally and personally.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In the spirit of collaboration, we would often borrow his phone to shoot our movies, and he never hesitated to lend it to us, even after long days on set. It was a testament to his selflessness and generosity, always putting the team before his own needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Though his death has been a great loss, it has left a deep void in our hearts and in our creative endeavors. Since Ray’s passing, the sorrow remains, and the harm it has caused us is immeasurable. We mourn his loss daily, and we feel his absence more than words can express. Our hearts go out to his family, and we really want to extend our deepest condolences. We are truly sorry for their loss, and we hope they find comfort in knowing the impact he had on all of us.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Though he is no longer with us, his spirit will live on in every project we continue to create and in the memories we cherish. His legacy of kindness, patience, humility, and dedication will forever inspire us. Rest in peace, dear friend. You may be gone, but your impact will never be forgotten.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lastly, as we bid farewell to Raymond Orleans Addy, let us remember the memories we shared and continue the traditions we started. Though he may no longer walk beside us, his spirit will live on in our hearts forever.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Thank you all.
          </p>
        </section>
        {/* Image after Tribute by Friends of the Creative Arts Industry */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/cre.jpeg"
            alt="Raymond Addy with Creative Arts Friends"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tribute from Nicholina and Children */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Tribute from Nicholina and Children</h2>
          <p className="text-gray-700 leading-relaxed">
            Raymond, our beloved big brother from another mother, as he described himself as mummy's firstborn. Our mentor, and closest friend. Ray, if we tried to express everything, he meant to us, we would undoubtedly find ourselves in tears.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Raymond was the quintessential protective sibling who always picked us up from school with a warm smile. He had a unique way of making our afternoons special, surprising us with pastries that he picked along the way. Those little gestures filled our days with joy and laughter.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Anything we have not heard from him in a while, Mummy will ask, &quot;Who has heard of
            Raymond tell him to come home, or she will exclaim hey is Raymond there.&#39; Then we
            will quickly call Ray to let him know Mummy wants to see him, within a day or two
            Raymond will come to visit as it was always a joy to be with him, showing us various
            electronic devices, he was a go-to person with those gadgets.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond his role as the friendly older brother, Raymond had an incredible talent that
            many didn’t know about—he was a gifted pencil artist. He often downplayed this skill,
            allowing everyone to believe that his true passion lay in drumming. When we were
            younger, while we slept soundly in our beds, he would be awake and quietly sketching
            and painting in the dim light of his room. As the curious baby sister, I caught him in the
            act more than once. My excitement got the better of me, and I shared my discovery with
            our mother, who encouraged him to showcase his artistry. He took her encouragement
            seriously, and his passion slowly blossomed, leading to opportunities that, admittedly,
            got him some funds, Ray made us enjoy some of his earnings by giving us a treat
          </p>
          <p className="text-gray-700 leading-relaxed">
            Raymond continually expressed how proud he was of me and often teasingly mentioned
            how he and Kojo (junior brother) would be keeping an eye on potential husbands in the
            future. Whenever we faced challenges or felt lost, as growing adults we always turned
            to Big Brother Raymond it’s therefore heart-wrenching to think that these precious
            memories are now tinged with sorrow.
            Ray, our big brother, we love you but God loves you more and has called you to your
            heavenly home. You will forever have a special place in our hearts. We promise to make
            you proud by staying focused on our call. The love you have for everyone around you
            will continue to be celebrated, even in your absence. It’s with a heavy heart that we say
            goodbye, big bro. Ray,

            Raymond Sleep well in the bosom of your maker where there is no pain, till we meet
            again at Jesus&#39; feet.
            Mama Nicho, Debbie, Kojo, Paul, Elorm the list goes on and on. We shall greatly miss
            you.
            FARE THEE WELL Ray. Rest in perfect peace. Amen.
          </p>
        </section>
        {/* Closing Remarks */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2">Closing Remarks</h2>
          <p className="text-gray-700 leading-relaxed">
            As we come to the end of this tribute, let us carry forward the love, kindness, and joy that Raymond brought into our lives. Though he is no longer with us, his spirit will forever remain in our hearts. May his memory be a blessing to us all.
          </p>
        </section>

        {/* Final Image */}
        <div className="rounded overflow-hidden shadow-md">
          <Image
            src="/images/5.jpeg"
            alt="Raymond Addy"
            width={900}
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
          </a>
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
        </div>
      </footer>
    </div>
  );
}