"use client";

import React, { ReactNode, useState } from "react";

// IMPORTANT:
// In src/app/layout.tsx add this metadata:
//
// export const metadata = {
//   metadataBase: new URL("https://rayccole.com"),
//   title: "rayccole's website",
//   description: "Official website for rayccole",
//   openGraph: {
//     title: "rayccole's website",
//     description: "Official website for rayccole",
//     images: ["/rayccole-ebay-picturelogo.png"],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "rayccole's website",
//     description: "Official website for rayccole",
//     images: ["/rayccole-ebay-picturelogo.png"],
//   },
// };
//
// Then place your image inside /public named:
// rayccole-ebay-picturelogo.png
import { Disc3, ShoppingBag, Mail } from "lucide-react";

const youtubeVideo = "https://www.youtube.com/embed/ymKCEzX4HNs";
const youtubeChannel = "https://www.youtube.com/@RAYCCOLE";

function RetroLogo() {
  const letters = [
    { char: "R", color: "text-red-600", rotate: "-rotate-6" },
    { char: "A", color: "text-blue-700", rotate: "rotate-2" },
    { char: "Y", color: "text-yellow-500", rotate: "-rotate-2" },
    { char: "C", color: "text-green-600", rotate: "rotate-3" },
    { char: "C", color: "text-red-600", rotate: "-rotate-3" },
    { char: "O", color: "text-blue-700", rotate: "rotate-2" },
    { char: "L", color: "text-yellow-500", rotate: "-rotate-2" },
    { char: "E", color: "text-green-600", rotate: "rotate-4" },
  ];

  return (
    <div className="flex items-end leading-none select-none justify-center md:justify-start overflow-hidden pb-1">
      {letters.map((letter, index) => (
        <span
          key={`${letter.char}-${index}`}
          className={`${letter.color} ${letter.rotate} text-[2.05rem] min-[380px]:text-[2.45rem] sm:text-[3.2rem] md:text-[4rem] font-black tracking-tight inline-block -mr-1 drop-shadow-[2px_2px_0_rgba(0,0,0,0.18)]`}
          style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
        >
          {letter.char}
        </span>
      ))}
      <span className="ml-1 text-[9px] sm:text-[10px] text-zinc-500 mb-2">TM</span>
    </div>
  );
}

function Box({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="border border-zinc-700 bg-white min-w-0">
      <div className="border-b border-zinc-700 px-2 py-1 bg-[#efefef]">
        <h2 className="text-[12px] font-bold text-black lowercase">{title}</h2>
      </div>
      <div className="p-3">{children}</div>
    </section>
  );
}

export default function Home() {
  const [showHornetsInfo, setShowHornetsInfo] = useState(false);

  return (
    <main
      className="min-h-screen bg-[#c0c0c0] text-black overflow-x-hidden"
      style={{ fontFamily: "Verdana, Arial, sans-serif" }}
    >
      <div className="w-full bg-[#000080] text-white text-[11px] sm:text-[12px] px-2 py-1 border-b border-black whitespace-nowrap overflow-hidden text-ellipsis">
        ✳ Rayccole — Personal Trading Community — Netscape
      </div>

      <div className="bg-[#efefef] border-b border-zinc-500 px-2 py-1 text-[10px] sm:text-[11px] flex gap-3 sm:gap-4 overflow-hidden">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Help</span>
      </div>

      <div className="w-full max-w-[1040px] mx-auto bg-white min-h-screen border-x border-zinc-500 px-2 sm:px-4 py-4 overflow-hidden">
        <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
          <RetroLogo />

          <nav className="flex flex-wrap gap-1 text-[12px] w-full md:w-auto justify-center md:justify-start">
            <a href="#music" className="border border-zinc-700 bg-[#efefef] px-3 sm:px-4 py-1 font-bold flex-1 md:flex-none text-center min-w-[86px]">
              Music
            </a>
            <a href="#videos" className="border border-zinc-700 bg-[#efefef] px-3 sm:px-4 py-1 font-bold flex-1 md:flex-none text-center min-w-[86px]">
              Videos
            </a>
            <a href="#merch" className="border border-zinc-700 bg-[#efefef] px-3 sm:px-4 py-1 font-bold flex-1 md:flex-none text-center min-w-[86px]">
              Merch
            </a>
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[180px_minmax(0,1fr)_220px] gap-3 sm:gap-4 items-start">
          <aside className="space-y-3 w-full order-2 md:order-1">
            <Box title="categories">
              <div className="space-y-2 text-[12px]">
                <a href="#music" className="block text-blue-700 underline font-bold">
                  Music
                </a>
                <a href="#videos" className="block text-blue-700 underline font-bold">
                  Videos
                </a>
                <a href="#merch" className="block text-blue-700 underline font-bold">
                  Merch
                </a>
              </div>
            </Box>

            <Box title="latest">
              <div className="text-[12px] leading-relaxed">
                New drops, visuals, and merch updates will live here.
              </div>
            </Box>

            <Box title="snippets">
              <div className="text-[11px] leading-relaxed space-y-2">
                <p>
                  to listen to snippets join my instagram channel <a
                    href="https://www.instagram.com/channel/Aba9Nr0rcYHQ2wdE/"
                    target="_blank"
                    className="text-blue-700 underline font-bold"
                  >
                    here
                  </a>
                </p>
              </div>
            </Box>
          </aside>

          <div className="space-y-4 min-w-0 order-1 md:order-2">
            <Box title="featured listing">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-zinc-600 mb-1">Current Listing</p>
                  <h1 className="text-[26px] sm:text-[34px] font-black leading-tight mb-2 tracking-tight">
                    SELVEDGE
                  </h1>

                  <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
                    <div className="border border-zinc-700 bg-[#f3f3f3] p-2 w-fit max-w-full shrink-0">
                      <img
                        src="/COVER.jpg"
                        alt="Selvedge album artwork"
                        className="w-full max-w-[320px] object-cover border border-zinc-700"
                      />
                    </div>

                    <div className="border border-zinc-700 bg-[#f7f7f7] p-3 text-[12px] w-full max-w-[180px] h-fit">
                      <div className="font-bold mb-2">Listing Info</div>
                      <div className="space-y-[2px] leading-snug">
                        <p>Starting Bid: $40</p>
                        <p>Length: 13 minutes</p>
                        <p>Inseams: 5 songs</p>
                        <p>Seller: rayccole</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[12px] sm:text-[13px] leading-relaxed mb-4 max-w-[500px]">
                    need some new pants? place your bids for sum mint condition selvedge denim here.
                  </p>

                  <div className="flex flex-col min-[380px]:flex-row flex-wrap gap-2">
                    <button className="border border-zinc-700 bg-[#f5e5c8] px-4 py-1 text-[12px] font-bold inline-flex items-center justify-center gap-1 hover:bg-[#ead8b4]">
                      BID NOW
                    </button>

                    <a
                      href="https://open.spotify.com/artist/4O76Ib6QQ4XfZ6auhm16AG?si=DQ_-VwDNRdiocuA7oCKuNQ&nd=1&dlsi=7593ae42b3934bc5"
                      target="_blank"
                      className="border border-zinc-700 bg-[#efefef] px-4 py-1 text-[12px] font-bold inline-flex items-center justify-center gap-1 hover:bg-[#dddddd]"
                    >
                      <Disc3 className="h-3.5 w-3.5" />
                      BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box title="music" id="music">
              <div className="border border-zinc-700 bg-white text-[12px] overflow-hidden">
                <div className="grid md:grid-cols-[minmax(0,1fr)_190px] border-b border-zinc-700">
                  <div className="bg-[#ffd91f] border-b md:border-b-0 md:border-r border-zinc-700 p-3">
                    <div className="grid min-[430px]:grid-cols-[120px_1fr] sm:grid-cols-[145px_1fr] gap-3 items-center">
                      <div className="flex justify-center">
                        <img
                          src="/hornets-artwork.png"
                          alt="Hornets warning sign"
                          className="w-[110px] h-[110px] sm:w-[132px] sm:h-[132px] object-contain mix-blend-multiply"
                        />
                      </div>

                      <div className="text-center min-[430px]:text-left min-w-0">
                        <h2 className="text-[18px] sm:text-[22px] font-black leading-[1.05] mb-2">
                          Having Problems<br />with HORNETS?
                        </h2>
                        <p className="font-bold leading-tight mb-2 max-w-[300px] sm:max-w-[260px] text-[11px] mx-auto min-[430px]:mx-0">
                          contact one of our beekeepers! may take up to 5-6 business days for delivery.
                        </p>
                        <button
                          onClick={() => setShowHornetsInfo(!showHornetsInfo)}
                          className="border border-zinc-700 bg-[#efefef] px-3 py-1 text-[10px] font-bold shadow-[1px_1px_0_#fff_inset,-1px_-1px_0_#b3b3b3_inset] hover:bg-[#dddddd]"
                        >
                          MORE INFO
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#fffdf3] p-3 text-center flex flex-col justify-center">
                    <h3 className="text-[22px] font-black leading-tight">HORNETS</h3>
                    <p className="text-[14px] font-bold mb-2">coming soon</p>
                    <div className="border-t border-dotted border-zinc-700 my-2" />
                    <p className="text-[10px] uppercase tracking-wide">Estimated Drop Date:</p>
                    <p className="text-[25px] font-black text-red-700 leading-tight">June 16</p>
                    <div className="border-t border-dotted border-zinc-700 my-2" />
                    <p className="text-[12px] font-black uppercase tracking-wide mb-2">Delivery Estimate</p>
                    <div className="border border-zinc-500 bg-white text-left">
                      <div className="border-b border-zinc-300 px-2 py-1.5">
                        <p className="font-bold">Standard Delivery</p>
                        <p>5-6 business days</p>
                      </div>
                      <div className="px-2 py-1.5">
                        <p className="font-bold">Priority Shipping</p>
                        <p>2-3 business days</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[9px] text-left leading-tight">*business days only. weekends and holidays not included.</p>
                  </div>
                </div>

                {showHornetsInfo && (
                  <div className="bg-[#fffdf3] p-3 border-t border-zinc-700">
                    <div className="grid min-[430px]:grid-cols-2 gap-x-8 gap-y-1 max-w-[560px]">
                      <div>
                        <div className="font-black uppercase mb-2">Track List</div>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>catch</li>
                          <li>hornets</li>
                          <li>scissors</li>
                          <li>valentines</li>
                        </ol>
                      </div>

                      <div className="min-[430px]:pt-7">
                        <ol start={5} className="list-decimal pl-5 space-y-1">
                          <li>fatigue</li>
                          <li>strong</li>
                          <li>what you did to me</li>
                        </ol>
                      </div>
                    </div>

                    <p className="mt-3 text-[11px] text-zinc-700 italic font-bold">
                      written and produced by rayccole
                    </p>
                  </div>
                )}
              </div>
            </Box>

            <Box title="videos" id="videos">
              <div className="space-y-4">
                <div className="border border-zinc-700 bg-black p-1 sm:p-2">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={youtubeVideo}
                      title="Rayccole Music Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <a
                    href={youtubeChannel}
                    target="_blank"
                    className="border border-zinc-700 bg-[#efefef] px-4 sm:px-5 py-2 text-[12px] font-bold text-center shadow-[1px_1px_0_#fff_inset,-1px_-1px_0_#b3b3b3_inset] hover:bg-[#dddddd]"
                  >
                    VIEW MORE ON YOUTUBE
                  </a>
                </div>
              </div>
            </Box>

            <Box title="merch" id="merch">
              <div className="border border-dashed border-zinc-600 bg-[#fafafa] p-4 text-[13px] text-center">
                <div className="flex items-center justify-center gap-2 font-bold mb-2">
                  <ShoppingBag className="h-4 w-4" />
                  coming soon
                </div>

                <p className="leading-relaxed">
                  follow instagram for updates on merch, drops, and future releases.
                </p>

                <a
                  href="https://www.instagram.com/rayccole"
                  target="_blank"
                  className="inline-block mt-3 border border-zinc-700 bg-[#efefef] px-4 py-1 text-[11px] font-bold hover:bg-[#dddddd]"
                >
                  @RAYCCOLE
                </a>
              </div>
            </Box>
          </div>

          <aside className="space-y-3 w-full max-w-none lg:max-w-[220px] justify-self-stretch lg:justify-self-auto order-1 lg:order-3 md:col-span-2 lg:col-span-1">
            <Box title="welcome">
              <div className="text-[12px] space-y-2 leading-relaxed break-words">
                <p className="font-bold tracking-wide">RAYCCOLE</p>
                <p>
                  Music, visuals,
                  <br className="hidden sm:block" />
                  and future merch.
                </p>
              </div>
            </Box>

            <Box title="quick links">
              <div className="space-y-2 text-[12px]">
                <a
                  href="https://www.instagram.com/rayccole/"
                  target="_blank"
                  className="block text-blue-700 underline font-bold"
                >
                  instagram
                </a>

                <a
                  href="https://www.youtube.com/@RAYCCOLE"
                  target="_blank"
                  className="block text-blue-700 underline font-bold"
                >
                  youtube
                </a>

                <a
                  href="https://www.facebook.com/rayccolee/"
                  target="_blank"
                  className="block text-blue-700 underline font-bold"
                >
                  facebook
                </a>

                <a
                  href="https://music.apple.com/us/artist/rayccole/1737356908"
                  target="_blank"
                  className="block text-blue-700 underline font-bold"
                >
                  apple music
                </a>

                <a
                  href="https://open.spotify.com/artist/4O76Ib6QQ4XfZ6auhm16AG?si=DQ_-VwDNRdiocuA7oCKuNQ&nd=1&dlsi=7593ae42b3934bc5"
                  target="_blank"
                  className="block text-blue-700 underline font-bold"
                >
                  spotify
                </a>
              </div>
            </Box>

            <Box title="contact">
              <div className="text-[12px] space-y-2 break-words">
                <div className="font-bold">Book / message</div>

                <a
                  href="mailto:rayccolee@gmail.com"
                  className="text-blue-700 underline flex items-start gap-1 break-all leading-snug"
                >
                  <Mail className="h-3.5 w-3.5 text-black shrink-0 mt-[1px]" />
                  <span>rayccolee@gmail.com</span>
                </a>
              </div>
            </Box>
          </aside>
        </div>
      </div>
    </main>
  );
}
