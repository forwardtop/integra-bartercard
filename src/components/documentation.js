import React from "react";

export default function Documentation() {
  return (
    <div className="w-full h-full ">
      <p className="text-gray-500 font-semibold mt-5">
      Please refer to the README.md file for each project (<a href="/" className="text-red-500 font-medium mt-5">linphone-iphone, linphone-android, linphone-desktop</a>) for developer information about the applications.
      </p>
    
      <p className="text-gray-500 mt-5">Additionally, our 
        <a href="/" >developer wiki</a>
       provides details about specific subjects:</p>
      <ul className="list-disc p-5">
        <li className="text-red-500 font-medium"><a href="/">good practices for using SIP</a></li>
        <li className="text-red-500 font-medium mt-5"><a href="/">building linphone on yocto</a></li>
        <li className="text-red-500 font-medium mt-5"><a href="/">using linphone on raspberry pi</a></li>
      </ul>
    </div>
  );
}