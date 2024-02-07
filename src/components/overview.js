import React from "react";

export default function Overview() {
  return (
    <div className="w-full h-full ">
      <h2 className="text-4xl font-semibold text-red-400 mt-5">Description</h2>

      <p className="text-gray-500 font-thin mt-5">
        <span className="text-gray-900 font-medium">SoftPhone</span> features a
        separation between the user interfaces and the core engine, allowing the
        creation of various kinds of user interface on top of the same
        functionalities.
      </p>
      <p className="text-gray-900 font-medium mt-5">
        The user interface frontends are:
      </p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>A Qt/QML interface for Windows desktop, macOS and GNU/Linux</li>
          <li>A console interface (linphone-daemon)</li>
          <li>An iPhone application built in Swift</li>
          <li>An Android application built in Kotlin</li>
        </ul>
      </div>
      <p className="text-gray-500 font-thin mt-5">
        <span className="text-red-500 font-medium">SoftPhone</span> is the core
        engine, this is the library that implements all the functionalities of
        Linphone. It is a powerful SIP-based SDK for Voice and Video over IP,
        that anyone can use to add audio and video calls or instant messaging
        capabilities to an application. It provides a high-level API to
        initiate, receive and terminate audio and video calls.
      </p>
      <p className="text-gray-500 font-thin mt-5">
        <span className="text-red-500 font-medium">SoftPhone</span> relies on
        the following software components:
      </p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>
            <a href="/" className="text-red-500 font-medium">
              Mediastreamer2
            </a>
            , a powerful multimedia SDK for audio/video streaming and processing
          </li>
          <li>
            <a href="/" className="text-red-500 font-medium">
              oRTP
            </a>
            , a simple RTP library
          </li>
          <li>
            <span className="text-gray-900 font-medium">belle-sip</span>, the
            SIP library
          </li>
        </ul>
      </div>
      <h2 className="text-4xl font-semibold text-red-400 mt-5">Architecture</h2>
      <div>
        <img src="/images/general.jpg" alt="general"></img>
      </div>

      <h2 className="text-4xl font-semibold text-red-400 mt-5">
        Console tools
      </h2>
      <p className="text-gray-500 font-thin mt-5">
        <span className="text-red-500 font-medium">Linphone-daemon </span> is a
        console-mode program based on Liblinphone that can register, send and
        receive calls by reading simple text commands from standard input or
        from a UNIX socket. In response to each command, linphone-daemon writes
        the execution status of the command to standard output (or a socket).
        This tool can easily be used from a shell script to execute simple SIP
        scenarios by those who do not require the full capabilities of the
        <span className="text-red-500 font-medium">Liblinphone SDK.</span>
      </p>
      <p className="text-gray-500 font-thin mt-5">
        <span className="text-red-500 font-medium">Linphone-daemon </span>
        supersedes the former "linphonec" console tool, as it
        uses a more effective syntax for inputs and outputs.
      </p>
    </div>
  );
}
