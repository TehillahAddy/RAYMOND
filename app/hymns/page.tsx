import Image from "next/image";
import Link from "next/link";

export default function HymnsPage() {
    return (

        <div className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#e4e9ec] to-white text-gray-900 font-sans">
            <div className="relative h-[280px] sm:h-[400px] w-full overflow-hidden">
                <Image
                    src="/images/7.jpg"
                    alt="Hymns"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-4xl sm:text-6xl font-serif font-bold">Hymns</h1>
                    <p className="text-base sm:text-lg mt-2 font-light">Songs of comfort and inspiration</p>
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

            {/* Main Content */}
            <main className="max-w-3xl mx-auto px-6 py-12 sm:px-8 animate-fadeIn space-y-10">
                {/* Hymns Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-serif font-semibold border-b pb-2">Hymns</h2>

                    {/* Hymn 1 */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Hymn No. 1: Blessed Assurance</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Blessed assurance, Jesus is mine:<br />
                            Oh what a foretaste of glory divine:<br />
                            Heir of salvation, purchase of God;<br />
                            Born of His Spirit, washed in His blood.<br />
                            This is my story, this is my song,<br />
                            Praising my Saviour all the day long.<br />
                            This is my story, this is my song,<br />
                            Praising my Saviour all the day long.<br />
                            Perfect submission, perfect delight,<br />
                            Visions of rapture burst on my sight;<br />
                            Angels descending, bring from above<br />
                            Echoes of mercy, whispers of love.<br />
                            Perfect submission, all is at rest,<br />
                            I in my Saviour am happy and blest;<br />
                            Watching and waiting, looking above,<br />
                            Filled with His goodness, lost in His love.
                        </p>
                    </div>

                    {/* Hymn 2 */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Hymn No. 2: It Is Well With My Soul</h3>
                        <p className="text-gray-700 leading-relaxed">
                            When peace like a river attendeth my way,<br />
                            When sorrows like sea billows roll;<br />
                            Whatever my lot Thou hast taught me to say,<br />
                            “It is well, it is well with my soul!”<br />
                            It is well with my soul!<br />
                            It is well, it is well with my soul<br />
                            Though Satan should buffet, though trails should come;<br />
                            Let this blest assurance control,<br />
                            That Christ hath regarded my helpless estate,<br />
                            And hath shed His own blood for my soul.<br />
                            And Lord, haste the day when the faith shall be sight,<br />
                            The clouds be rolled back as a scroll;<br />
                            The trump shall resound, and the Lord shall descend;<br />
                            Even so, it is well with my soul.
                        </p>
                    </div>

                    {/* Hymn 3 */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Hymn No. 3: Guide Me, O Thou Great Jehovah</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Guide me, O Thou great Jehovah<br />
                            Pilgrim through this barren land<br />
                            I am weak, but Thou art mighty<br />
                            Hold me with Thy powerful hands<br />
                            Bread of heaven, feed me now and evermore<br />
                            Bread of heaven, feed me now and evermore<br />
                            Open now the crystal fountain<br />
                            Whence the healing waters flow<br />
                            Let the fiery, cloudy pillar<br />
                            Lead me all my journey through<br />
                            Strong Deliverer, be Thou still my Strength and Shield<br />
                            Strong Deliverer, be Thou still my Strength and Shield<br />
                            When I tread the verge of Jordan<br />
                            Bid my anxious fears subside<br />
                            Death of death, and hell&#39;s destruction<br />
                            Land me safe on Canaan&#39;s side<br />
                            Songs of praises, I will ever give to Thee<br />
                            Songs of praises, I will ever give to Thee
                        </p>
                    </div>

                    {/* Hymn 4 */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Hymn No. 4: Abide With Me</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Abide with me: fast falls the eventide;<br />
                            The darkness deepens; Lord, with me abide:<br />
                            When other helpers fail and comforts flee,<br />
                            Help of the helpless, oh, abide with me.<br />
                            Swift to its close ebbs out life’s little day;<br />
                            Earth’s joys grow dim, its glories pass away:<br />
                            Change and decay in all around I see;<br />
                            O Thou who changest not, abide with me.<br />
                            Come not in terrors, as the King of kings;<br />
                            But kind and good, with healing in Thy wings:<br />
                            Tears for all woes, a heart for every plea;<br />
                            Come, Friend of sinners, thus abide with me.<br />
                            I need Thy presence every passing hour:<br />
                            What but Thy grace can foil the tempter’s power?<br />
                            Who like Thyself my guide and stay can be?<br />
                            Through cloud and sunshine, oh, abide with me.<br />
                            I fear no foe, with Thee at hand to bless:<br />
                            Ills have no weight, and tears no bitterness:<br />
                            Where is death’s sting? Where, grave, thy victory?<br />
                            I triumph still, if Thou abide with me.
                        </p>
                    </div>

                    {/* Hymn 5 */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Hymn No. 5: Nearer, My God, To Thee</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Nearer, my God, to Thee,<br />
                            Nearer to Thee;<br />
                            E’en though it be a cross<br />
                            That raiseth me,<br />
                            Still all my song shall be<br />
                            Nearer, my God, to Thee,<br />
                            Nearer, my God, to Thee,<br />
                            Nearer to Thee.<br /><br />
                            Though, like a wanderer,<br />
                            The sun gone down,<br />
                            Darkness comes over me,<br />
                            My rest a stone;<br />
                            Yet in my dreams I’d be<br />
                            Nearer, my God, to Thee,<br />
                            Nearer, my God, to Thee,<br />
                            Nearer to Thee.<br />
                            There let the way appear,<br />
                            Steps unto heav’n;<br />
                            All that thou sendest me,<br />
                            In mercy giv’n;<br />
                            Angels to beckon me<br />
                            Nearer, my God, to thee,<br />
                            Nearer, my God, to thee,<br />
                            Nearer to thee!<br />
                            Then with my waking thoughts<br />
                            Bright with thy praise,<br />
                            Out of my stony griefs<br />
                            Bethel I’ll raise;<br />
                            So by my woes to be<br />
                            Nearer, my God, to thee,<br />
                            Nearer, my God, to thee,<br />
                            Nearer to thee!
                        </p>
                    </div>

                    {/* Hymn 6 */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Hymn No. 6: Art Thou Weary</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Art thou weary, art thou languid,<br />
                            Art thou sore distressed?<br />
                            Come to Me, saith One, and coming,<br />
                            Be at rest.<br />
                            Hath He marks to lead me to Him,<br />
                            If He be my guide?<br />
                            In His feet and hands are wound prints<br />
                            And His side.<br />
                            If I still hold closely to Him,<br />
                            What hath He at last?<br />
                            Sorrow vanquished, labor ended,<br />
                            Jordan passed.<br />
                            If I ask Him to receive me,<br />
                            Will He say me nay?<br />
                            Not till earth and not till Heaven<br />
                            Pass away.
                        </p>
                    </div>

                    {/* Hymn 7 */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Hymn No. 7: My Faith Has Found a Resting Place</h3>
                        <p className="text-gray-700 leading-relaxed">
                            My faith has found a resting place,<br />
                            Not in device nor creed;<br />
                            I trust the Ever-living One,<br />
                            His wounds for me shall plead.<br />
                            I need no other argument,<br />
                            I need no other plea,<br />
                            It is enough that Jesus died,<br />
                            And that He died for me.<br />
                            Enough for me that Jesus saves,<br />
                            This ends my fear and doubt;<br />
                            A sinful soul I come to Him,<br />
                            He’ll never cast me out.<br />
                            My heart is leaning on the Word,<br />
                            The written Word of God,<br />
                            Salvation by my Savior’s name,<br />
                            Salvation through His blood.<br />
                            My great Physician heals the sick,<br />
                            The lost He came to save;<br />
                            For me His precious blood He shed,<br />
                            For me His life He gave.
                        </p>
                    </div>
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
                        <Image
                            src="/images/logs.png"
                            alt="Lionheart Tech Logo"
                            width={49}
                            height={49}
                            className="rounded-sm"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
}
