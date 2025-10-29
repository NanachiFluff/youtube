import React from "react";

function Side() {
  return (
    <div className="p-4">
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
        <div className="flex">
          <img
            className="h-[90px] rounded-lg"
            src="src/assets/videos/video1.jpg"
            alt=""
          />
          <div className="px-2">
            <p className="font-medium text-sm flex items-center">
              [MV] TAK - ‘mochimochi‘ feat. 初音ミク{" "}
              <img
                className="h-6 mt-1"
                src="src/assets/elements/tuldok.svg"
                alt=""
              />
            </p>
            <p className="text-[11px]">TAK / DORIDORI</p>
            <p className="text-[11px]">4.1M views • 1 year ago</p>
          </div>
        </div>
        <div className="flex py-2">
          <img
            className="h-[90px] rounded-lg"
            src="src/assets/videos/video2.jpg"
            alt=""
          />
          <div className="px-2">
            <p className="font-medium text-sm flex items-center">
              CHUKICHUKI POKOPOKO-PON / TAK feat. Hatsune Miku
              <img
                className="h-6 mt-1"
                src="src/assets/elements/tuldok.svg"
                alt=""
              />
            </p>
            <p className="text-[11px]">Hatsune Miku and TAK / DORIDORI</p>
            <p className="text-[11px]">1.1M views • 2 months ago</p>
          </div>
        </div>
        <div className="flex py-1">
          <img
            className="h-[90px] rounded-lg"
            src="src/assets/videos/video3.jpg"
            alt=""
          />
          <div className="px-2">
            <p className="font-medium text-sm flex items-center">
              ime44 - Ime-chan wants to become a guitar hero (feat. Kaa..
              <img
                className="h-6 mt-1"
                src="src/assets/elements/tuldok.svg"
                alt=""
              />
            </p>
            <p className="text-[11px]">いめ44</p>
            <p className="text-[11px]">2.6M views • 2 years ago</p>
          </div>
        </div>
        <div className="flex py-1">
          <img
            className="h-[90px] rounded-lg"
            src="src/assets/videos/video4.jpg"
            alt=""
          />
          <div className="px-2">
            <p className="font-medium text-sm flex items-center">
              NANDAI BAMCO, Milklarge - The Cat Alchemist🐱🧪
              <img
                className="h-6 mt-1"
                src="src/assets/elements/tuldok.svg"
                alt=""
              />
            </p>
            <p className="text-[11px]">밀크라지</p>
            <p className="text-[11px]">5.8M views • 1 year ago</p>
          </div>
        </div>
      </div>
      {/* shorts logo */}
      <div className="flex space-x-3 items-center">
        <div>
          <img src="src/assets/elements/shorts.svg" alt="" />
        </div>
        <div className="font-bold text-[20px] ">Shorts</div>
      </div>
      {/* the shorts */}
      <div className="flex py-2 space-x-4">
        <div>
          <img
            className="h-[250px] rounded-lg"
            src="src/assets/shorts/short1.jpg"
            alt=""
          />
          <p className="flex text-sm font-medium">
            YUNYUN SYNDROME!? RHYTHM PYSCHOSIS...
            <img
              className="h-6 mt-1"
              src="src/assets/elements/tuldok.svg"
              alt=""
            />
          </p>
          <p className="text-[10px]">818 views</p>
        </div>
        <div>
          <img
            className="h-[250px] rounded-lg"
            src="src/assets/shorts/short2.jpg"
            alt=""
          />
          <p className="flex text-sm font-medium">
            YunYun Syndrome Fanart again...
            <img
              className="h-6 mt-1"
              src="src/assets/elements/tuldok.svg"
              alt=""
            />
          </p>
          <p className="text-[10px]">290 views</p>
        </div>
        <div>
          <img
            className="h-[250px] rounded-lg"
            src="src/assets/shorts/short3.jpg"
            alt=""
          />
          <p className="flex text-sm font-medium">
            [Drawing] Speedpaint YunYun Syndrome Fanart
            <img
              className="h-6 mt-1"
              src="src/assets/elements/tuldok.svg"
              alt=""
            />
          </p>
          <p className="text-[10px]">290 views</p>
        </div>
      </div>
    </div>
  );
}

export default Side;
