import React from "react";

function Video() {
  return (
    <div className="p-4">
      <div className="  flex justify-center items-center">
        <iframe
          className="w-full h-[500px] rounded-lg"
          src="https://www.youtube.com/embed/EtNY9inEPOg?list=RDEtNY9inEPOg"
          title="MARON feat. KOTOKO「電波的妄想美少女Q」 - ゆんゆん電波シンドローム主題歌"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h1 className="font-bold text-[21px] my-2">
          MARON feat. KOTOKO「電波的妄想美少女Q」 -
          ゆんゆん電波シンドローム主題歌
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex space-x-5 items-center">
            <img
              className="h-10 rounded-full"
              src="src/assets/elements/author.jpg"
              alt=""
            />
            <div>
              <p className="font-bold">まろん（IOSYS）</p>
              <p>44.9K subscribers</p>
            </div>
            <button className="bg-black rounded-full text-white px-4 py-1 font-medium">
              Subscribe
            </button>
          </div>
          <div className="flex justify-end-safe items-center font-medium">
            <button className="flex bg-gray-200 rounded-l-full px-3 py-1 space-x-1">
              <img src="src/assets/elements/thumbsup.svg" alt="" />
              <span>631</span>
            </button>
            <button className="border-l-2 border-gray-400  bg-gray-200 rounded-r-full px-3 py-1 ">
              <img src="src/assets/elements/thumbsdown.svg" alt="" />
            </button>
            <button className="flex bg-gray-200 rounded-full px-3 py-1 mx-4 space-x-1">
              <img src="src/assets/elements/share.svg" alt="" />
              <span>Share</span>
            </button>
            <button className="flex bg-gray-200 rounded-full px-3 py-1 space-x-1">
              <img src="src/assets/elements/downloadbt.svg" alt="" />
              <span>Download</span>
            </button>
            <button className="flex bg-gray-200 rounded-full px-3 py-1 mx-4 space-x-1">
              <img src="src/assets/elements/clip.svg" alt="" />
              <span>Clip</span>
            </button>
            <button className="bg-gray-200 flex rounded-full px-1 py-1">
              <img className="" src="src/assets/elements/download.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* this is the desc */}
      <div className="py-4">
        <div className="bg-gray-200 rounded-lg h-[110px]">
          <h1 className="font-medium text-sm py-2 px-2">
            7.6K views 2 weeks ago
          </h1>
          <div className="px-2 w-[35%] text-sm">
            ゲーム「ゆんゆん電波シンドローム」主題歌 『電波的妄想美少女Q
            (feat.KOTOKO)』 各種音楽配信サイトにて配信中！！...more
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-gray-200 rounded-lg h-[30px] text-[11px] px-2 flex items-center">
        <div className="flex items-center">
          <div>
            This is a trailer video of the anime game called yunyun syndrome.You
            play as a shut-in (hikikomori) girl named Qtie, who’s obsessed with
            a fictional character called
          </div>
          <div className="flex space-x-2 justify-end items-center px-4">
            <img className="h-4" src="src/assets/elements/diamond.svg" alt="" />
            Summary
            <img
              className="px-2"
              src="src/assets/elements/arrowdown.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
