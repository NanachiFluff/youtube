import React from "react";

function Side() {
  return (
    <div className="p-4 w-[450px]">
      {/* ung taas na kala mo options */}
      <div className="flex space-x-3">
        <div className="bg-black rounded-sm px-3 text-white">All</div>
        <div className="rounded-sm px-3 bg-gray-200">From まろん（IOSYS）</div>
        <div className="rounded-sm px-3 bg-gray-200">Soundtracks</div>
        <div>
          <img src="src/assets/elements/arrowright.svg" alt="" />
        </div>
      </div>
      {/* the 4 videos */}
      <div className="py-4">
        <div className="flex items-center ">
          <img
            className="h-[90px] rounded-lg"
            src="src/assets/videos/video1.jpg"
            alt=""
          />
          <div className="absolute opacity-60 bg-black text-white text-[13px] rounded-sm px-1 mt-17 ml-31">
            3:00
          </div>
          <div className="px-2">
            <p className="font-medium text-sm flex items-center">
              [MV] TAK - ‘mochimochi‘ feat. 初音ミク{" "}
              <img
                className="h-6 mt-1 "
                src="src/assets/elements/tuldok.svg"
                alt=""
              />
            </p>
            <p className="text-[11px] text-gray-400">TAK / DORIDORI</p>
            <p className="text-[11px] text-gray-400">4.1M views • 1 year ago</p>
          </div>
        </div>
        <div className="flex py-2">
          <img
            className="h-[90px] rounded-lg"
            src="src/assets/videos/video2.jpg"
            alt=""
          />
          {/* edit soon */}
          <div className="absolute opacity-60 bg-black text-white text-[13px] rounded-sm px-1 mt-17 ml-31">
            3:00
          </div>
          <div className="px-2">
            <p className="font-medium text-sm flex items-center">
              CHUKICHUKI POKOPOKO-PON / TAK feat. Hatsune Miku
              <img
                className="h-6 mt-1"
                src="src/assets/elements/tuldok.svg"
                alt=""
              />
            </p>
            <p className="text-[11px] text-gray-400">
              Hatsune Miku and TAK / DORIDORI
            </p>
            <p className="text-[11px] text-gray-400">
              1.1M views • 2 months ago
            </p>
          </div>
        </div>
        <div className="flex py-1">
          <img
            className="h-[90px] rounded-lg"
            src="src/assets/videos/video3.jpg"
            alt=""
          />
          <div className="absolute opacity-60 bg-black text-white text-[13px] rounded-sm px-1 mt-17 ml-31">
            3:00
          </div>
          <div className="px-2">
            <p className="font-medium text-sm flex items-center">
              ime44 - Ime-chan wants to become a guitar hero (feat. Kaa..
              <img
                className="h-6 mt-1"
                src="src/assets/elements/tuldok.svg"
                alt=""
              />
            </p>
            <p className="text-[11px] text-gray-400">いめ44</p>
            <p className="text-[11px] text-gray-400">
              2.6M views • 2 years ago
            </p>
          </div>
        </div>
        <div className="flex py-1">
          <img
            className="h-[90px] rounded-lg"
            src="src/assets/videos/video4.jpg"
            alt=""
          />
          <div className="absolute opacity-60 bg-black text-white text-[13px] rounded-sm px-1 mt-16.5 ml-31">
            3:00
          </div>
          <div className="px-2">
            <p className="font-medium text-sm flex items-center">
              NANDAI BAMCO, Milklarge - The Cat Alchemist🐱🧪
              <img
                className="h-6 mt-1"
                src="src/assets/elements/tuldok.svg"
                alt=""
              />
            </p>
            <p className="text-[11px] text-gray-400">밀크라지</p>
            <p className="text-[11px] text-gray-400">5.8M views • 1 year ago</p>
          </div>
        </div>
      </div>

      <hr className="text-gray-200 mb-4" />

      {/* shorts logo */}
      <div className="flex space-x-3 items-center">
        <div>
          <img src="src/assets/elements/shorts.svg" alt="" />
        </div>
        <div className="font-bold text-[20px] ">Shorts</div>
      </div>
      {/* the shorts */}
      <div className="flex space-x-2">
        <div>
          <img
            className="h-[250px] rounded-lg"
            src="src/assets/shorts/short1.jpg"
            alt=""
          />
          <p className="flex text-[13px] font-medium">
            YUNYUN SYNDROME!? RHYTHM PYSCHOSIS...
            <img
              className="h-6 mt-1"
              src="src/assets/elements/tuldok.svg"
              alt=""
            />
          </p>
          <p className="text-[10px] text-gray-400">818 views</p>
        </div>
        <div>
          <img
            className="h-[250px] rounded-lg"
            src="src/assets/shorts/short2.jpg"
            alt=""
          />
          <p className="flex text-[13px] font-medium">
            YunYun Syndrome Fanart again...
            <img
              className="h-6 mt-1"
              src="src/assets/elements/tuldok.svg"
              alt=""
            />
          </p>
          <p className="text-[10px] text-gray-400">290 views</p>
        </div>
        <div>
          <div>
            <img
              className="absolute bg-white rounded-full p-2 mt-27 ml-30 shadow-xl/10"
              src="src/assets/elements/arrowright.svg"
              alt=""
            />
          </div>
          <img
            className="h-[250px] rounded-lg"
            src="src/assets/shorts/short3.jpg"
            alt=""
          />
          <p className="flex text-[13px] font-medium">
            [Drawing] Speedpaint YunYun Syndrome Fanart
            <img
              className="h-6 mt-1"
              src="src/assets/elements/tuldok.svg"
              alt=""
            />
          </p>
          <p className="text-[10px] text-gray-400">290 views</p>
        </div>
      </div>
    </div>
  );
}

export default Side;
