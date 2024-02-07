import React from "react";

export default function Download() {
  return (
    <div className="w-full h-full ">
      <h2 className="text-4xl font-semibold text-red-400 mt-5">License</h2>
      <p className="text-gray-500 font-semibold mt-5">
        Linphone is dual licensed, and can be licensed and distributed:
      </p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>
            under a
            <a href="/">
              <span className="text-red-500 font-medium">&nbsp; GNU GPLv3</span>
            </a>
            license for free (open source)
          </li>
          <li>
            under a proprietary license, to be used in closed source
            applications. Contact
            <a href="/contact">
              <span className="text-red-500 font-medium">
                &nbsp;Belledonne Communications
              </span>
            </a>
            &nbsp;for costs and other service information.
          </li>
        </ul>
      </div>
      <h2 className="text-4xl font-semibold text-red-400 mt-5">
        Download Mobile versions
      </h2>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>
            Linphone iOS on the
            <a href="/">
              <span className="text-red-500 font-medium">&nbsp; App Store</span>
            </a>
            &nbsp; license for free (open source)
          </li>
          <li>
            Linphone Android on
            <a href="/contact">
              <span className="text-red-500 font-medium">
                &nbsp;Google Play
              </span>
            </a>
            &nbsp;and the apk
            <a href="/contact">
              <span className="text-red-500 font-medium">&nbsp;here</span>
            </a>
          </li>
        </ul>
      </div>
      <h2 className="text-4xl font-semibold text-red-400 mt-5">
        Download Desktop versions
      </h2>
      <p className="text-gray-500">Linphone for desktop:</p>
      <p className="text-red-500 font-medium">
        <a href="/" >Download Linphone for macOS</a>
      </p>
      <p className="text-red-500 font-medium">
        <a href="/" >Download Linphone for Windows</a>
      </p>

      <p className="text-gray-500">AppImage package for GNU/Linux:</p>
      <p className="text-red-500 font-medium">
        <a href="/" >Download the AppImage package for Linux</a>
      </p>
    </div>
  );
}
