import React from "react";

export default function ProductContent() {
  return (
    <div>
      <div className="mx-auto max-w-[1000px] flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl text-red-500 font-semibold">Soft Phone</h1>
        <p className="text-red-500 text-center font-semibold p-2 mt-3">
          is an open source instant messaging and voice/video over IP (VoIP)
          phone that makes it possible to communicate freely with people over
          the internet via voice, video and text messaging.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 p-8 mt-3">
          <div>
            <p className="text-gray-500 text-justify">
              Since it follows open standards from the telecommunications
              industry (SIP, RTP), Linphone is interoperable with most PBXs and
              SIP servers, including our own Flexisip server, and can be used
              with any SIP VoIP operator.
              <br />
              <br />
              Discover complementary products in our complete solution for
              instant messaging and IP-to-IP calls, such as Linphone
              applications, Liblinphone cross-platform VoIP SDK and Flexisip
              server.
            </p>
          </div>
          <div>
            <p className="text-blue-500 text-justify italic">
              Many new features are still under development on a medium- or
              long-term basis. Please feel free to contact us if you want to
              know more about our development roadmap, or if you are interested
              in financing the development of a particular feature.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mx-auto max-w-[1820px] p-7 bg-[#e9f2f7]"
        style={{
          background:
            "#e9f2f7 url(/images/productBottomGris.png) no-repeat bottom center",
        }}
      >
        <div className="mx-auto max-w-[1000px]">
          <div className="grid lg:grid-cols-2">
            <div className="pt-0 pr-5 pb-5 pl-5">
              <h2 className="text-4xl text-gray-500 font-semibold ">
                <div className="py-10">
                  Soft Phone for <br></br>smartphones and tablets
                </div>
              </h2>
              <p className="text-gray-500 text-justify">
                Linphone is one of the most famous open source softphones in the
                world. It is fully SIP-based, for all calling, presence and IM
                features.
                <br />
                <br />
                Use Linphone for free, and enjoy its intuitive interface and
                advanced features with our free SIP service or with an existing
                SIP account.
              </p>
              <h4 className="text-red-500 mt-5 text-lg">
                Easy-to-use graphical interface :
              </h4>
              <ul className="list-disc text-gray-500 px-8">
                <li>account creation assistant</li>
                <li>
                  smart contact list, with address book synchronisation for
                  smartphones
                </li>
                <li>call history</li>
                <li>"Invite your friends" option</li>
                <li>remote provisioning from a QR Code or a URL</li>
              </ul>
              <h4 className="text-red-500 mt-5 text-lg">
                Advanced calling features :
              </h4>
              <ul className="list-disc text-gray-500 px-8">
                <li>
                  HD video calls with video preview (H.264, H.265 and VP8 codecs
                  supported)
                </li>
                <li>audio/video conference calls and scheduled meetings</li>
                <li>
                  call transfer and multi-call management (pause and resume)
                </li>
                <li>call recording and replay (audio only)</li>
              </ul>
              <h4 className="text-red-500 mt-5 text-lg">
                Enhanced Instant Messaging experience :
              </h4>
              <ul className="list-disc text-gray-500 px-8">
                <li>one-to-one and multi-participant conversations</li>
                <li>intuitive message delivery status (IMDN)</li>
                <li>
                  file sharing (photo, video, document, voice/video message)
                </li>
                <li>reply to / forward / copy options</li>
                <li>multi-device support</li>
                <li>
                  advanced IM notifications, with "reply to" and "mark as read"
                  options
                </li>
              </ul>
              <h4 className="text-red-500 mt-5 text-lg">
                Secure communications :
              </h4>
              <ul className="list-disc text-gray-500 px-8">
                <li>secure user authentication&nbsp;</li>
                <li>
                  end-to-end&nbsp;encryption of audio/video calls,&nbsp;messages
                  and shared files
                </li>
                <li>post quantum encryption</li>
                <li>ephemeral messaging</li>
              </ul>

              <div className="mt-5">
                <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 mb-24 hover:bg-red-500 hover:text-white duration-300">
                  TECHNICAL CORNER
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center flex-wrap">
                <img
                  src="/images/softphone.png"
                  alt="softphone"
                  className="h-[500px]"
                ></img>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-red-500 text-lg text-center mt-5 font-semibold">
                  AVAILABLE FOR:
                </h3>
                <div className="flex justify-center mt-3">
                  <div className="text-center">
                    <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                      <img src="/images/android.png" alt="android" />
                    </div>
                    <p className="text-red-500">Android</p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                      <img src="/images/apple.png" alt="apple" />
                    </div>
                    <p className="text-red-500">Apple</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto max-w-[1680px] p-7 bg-[#ffffff]"
        style={{
          background:
            "#ffffff url(/images/productBottomBlanc.png) no-repeat bottom center",
        }}
      >
        <div className="mx-auto max-w-[1680px] p-7">
          <div className="mx-auto max-w-[1000px]">
            <div className="grid lg:grid-cols-2">
              <div className="">
                <div className="flex flex-col justify-center flex-wrap">
                  <img
                    src="/images/site_web_.png"
                    alt="softphone"
                    className="h-[500px]"
                  ></img>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-red-500 text-lg font-semibold text-center mt-5">
                    AVAILABLE FOR:
                  </h3>
                  <div className="flex justify-center mt-3">
                    <div className="text-center">
                      <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                        <img src="/images/linux.png" alt="linux" />
                      </div>
                      <p className="text-red-500">GNU / Linux</p>
                    </div>
                    <div className="text-center">
                      <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                        <img src="/images/appstore.png" alt="linux" />
                      </div>
                      <p className="text-red-500">macOS</p>
                    </div>
                    <div className="text-center">
                      <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                        <img src="/images/linux.png" alt="linux" />
                      </div>
                      <p className="text-red-500">Windows Desktop</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-0 pr-5 pb-5 pl-5">
                <h2 className="text-4xl text-gray-500 font-semibold ">
                  <div className="py-10">
                    Soft Phone for <br></br>desktop platforms
                  </div>
                </h2>
                <p className="text-gray-500 text-justify">
                  Linphone for desktop platforms is perfectly suited for both
                  standard users with no specific knowledge of VoIP/SIP and for
                  advanced audio/video calling use cases in a professional
                  environment. It is fully SIP-based, for all calling, presence
                  and IM features.
                  <br />
                  <br />
                  Use Linphone Desktop for free, and enjoy its modern look and
                  feel and its many advanced features with our free SIP service
                  or with an existing SIP account.
                </p>
                <h4 className="text-red-500 mt-5 text-lg">
                  Complete, intuitive User Interface :
                </h4>
                <ul className="list-disc text-gray-500 px-8">
                  <li>
                    simplified user experience with swift access to major
                    features
                  </li>
                  <li>
                    smart contact list, with address book synchronisation for
                    smartphones
                  </li>
                  <li>intelligent search bar for ease of communicating</li>
                  <li>contact list with presence status</li>
                  <li>unified call and chat history</li>
                  <li>quick access to your recent events</li>
                  <li>multi-account and multi-device support</li>
                </ul>
                <h4 className="text-red-500 mt-5 text-lg">
                  Enhanced Instant Messaging Experience :
                </h4>
                <ul className="list-disc text-gray-500 px-8">
                  <li>instant messaging with file sharing and groups</li>
                  <li>access to chat views during calls</li>
                  <li>intuitive message delivery status (IMDN)</li>
                </ul>
                <h4 className="text-red-500 mt-5 text-lg">
                  Advanced calling features :
                </h4>
                <ul className="list-disc text-gray-500 px-8">
                  <li>
                    HD video calls in full screen mode (H.264, H.265 and VP8
                    codecs supported)
                  </li>
                  <li>
                    optimised audio/video quality, thanks to our new jitter
                    buffer and bitrate adaptation algorithms
                  </li>
                  <li>HD voice (Opus support) and echo cancellation</li>
                  <li>
                    audio/video conference calls&nbsp;with up to
                    eight&nbsp;participants, with three display modes (active
                    speaker, mosaic, audio only)
                  </li>
                  <li>multiple call&nbsp;management (pause and&nbsp;resume)</li>
                  <li>call transfer, auto-answer, DTMF support</li>
                  <li>
                    call quality indicator and display of advanced call
                    statistics
                  </li>
                  <li>
                    secure communications with SIP/TLS, SRTP and ZRTP and post
                    quantum encryption
                  </li>
                </ul>
                <h4 className="text-red-500 mt-5 text-lg">
                  Secure communications :
                </h4>
                <ul className="list-disc text-gray-500 px-8">
                  <li>secure user authentication&nbsp;</li>
                  <li>
                    end-to-end&nbsp;encryption of audio/video
                    calls,&nbsp;messages and shared files
                  </li>
                  <li>post quantum encryption</li>
                  <li>ephemeral messaging</li>
                </ul>

                <div className="mt-5">
                  <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 mb-24 hover:bg-red-500 hover:text-white duration-300">
                    TECHNICAL CORNER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto max-w-[1680px] p-7 bg-[#e9f2f7]"
        style={{
          background:
            "#e9f2f7 url(/images/productBottomGris.png) no-repeat bottom center",
        }}
      >
        <div className="mx-auto max-w-[1000px]">
          <div className="grid lg:grid-cols-2">
            <div className="pt-0 pr-5 pb-5 pl-5">
              <h2 className="text-4xl text-gray-500 font-semibold ">
                <div className="py-10">
                  Soft Phone for <br></br>web integration
                </div>
              </h2>
              <p className="text-gray-500 text-justify">
                Linphone Desktop is now able to interact with web browsers and
                can be integrated with your Web Services.
                <br />
                <br />
                Since we are experiencing increasing demand for advanced
                solutions for professionals, we have made Linphone for Desktop
                capable of receiving information from a web browser to start a
                call, open the app, invite participants to a conference call
                etc.
              </p>

              <div className="mt-5">
                <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 mb-24 hover:bg-red-500 hover:text-white duration-300">
                  DEMO PAGE
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center flex-wrap">
                <img
                  src="/images/web_integration_0.png"
                  alt="web integration"
                  className="h-[500px]"
                ></img>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-red-500 text-lg text-center mt-5 font-semibold">
                  AVAILABLE FOR:
                </h3>
                <div className="flex justify-center mt-3">
                  <div className="text-center">
                    <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                      <img src="/images/chrome.png" alt="android" />
                    </div>
                    <p className="text-red-500">Chrome</p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                      <img src="/images/edge.png" alt="Edge" />
                    </div>
                    <p className="text-red-500">Edge</p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                      <img src="/images/firefox.png" alt="Firefox" />
                    </div>
                    <p className="text-red-500">Firefox</p>
                  </div>
                </div>
                <div className="flex justify-center mt-8 lg:mb-40">
                  <div className="text-center">
                    <div className="p-4 bg-white border border-solid border-red-500 rounded-full m-0 mr-6 mb-8 ml-6">
                      <img src="/images/safari.png" alt="Safari" />
                    </div>
                    <p className="text-red-500">Safari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto max-w-[1680px] p-7 bg-[#ffffff]"
        style={{
          background:
            "#ffffff url(/images/productBottomBlanc.png) no-repeat bottom center",
        }}
      >
        <div className="mx-auto max-w-[1680px] p-7">
          <div className="mx-auto max-w-[1000px]">
            <div className="grid lg:grid-cols-2">
              <div className="">
                <div className="flex flex-col justify-center flex-wrap">
                  <img
                    src="/images/site_web.png"
                    alt="softphone"
                    className="h-[500px]"
                  ></img>
                </div>
              </div>
              <div className="pt-0 pr-5 pb-5 pl-5 text-justify">
                <h2 className="text-4xl text-gray-500 font-semibold ">
                  <div className="py-10">Liblinphone SDK</div>
                </h2>
                <div className="text-gray-500 text-justify">
                  Liblinphone is a high-level open source library that
                  integrates all the SIP-based voice/video calling, conferencing
                  and instant messaging features into a single easy-to-use API.
                  <br />
                  <br />
                  <b>
                    This is the VoIP SDK engine on which Linphone applications
                    are based!
                  </b>
                  <br />
                  <br />
                  <p className="text-gray-500 text-justify">
                    Liblinphone combines our media processing and streaming
                    toolkit (Mediastreamer2) with our user-agent library for SIP
                    signaling (belle-sip).
                  </p>
                </div>
                <h4 className="text-red-500 mt-5 text-lg">
                  Signaling features :
                </h4>
                <ul className="list-disc text-gray-500 px-8">
                  <li>
                    user authentication via digest (SHA256 or md5)&nbsp;and TLS
                    client certificates
                  </li>
                  <li>
                    multiple call&nbsp;management: hold, resume, transfer and
                    more
                  </li>
                  <li>
                    multiple SIP proxy support: registrar, proxies, outbound
                    proxies
                  </li>
                  <li>presence using list subscription to presence server</li>
                  <li>DTMF (telephone tones)</li>
                  <li>interoperability with IMS networks</li>
                  <li>suitable for building a VoLTE-compatible client</li>
                </ul>
                <h4 className="text-red-500 mt-5 text-lg">Media features :</h4>
                <ul className="list-disc text-gray-500 px-8">
                  <li>HD audio calls with support for Opus codec</li>
                  <li>
                    HD video calls with support for H.264, H.265 and VP8
                    codecs&nbsp;&nbsp;
                  </li>
                  <li>state-of-the-art adaptive jitter buffer algorithm</li>
                  <li>innovative adaptive bitrate control</li>
                  <li>ICE support&nbsp;for optimised NAT traversal</li>
                  <li>
                    end-to-end media encryption using&nbsp;SRTP, SRTP-DTLS and
                    ZRTP protocols
                  </li>
                  <li>
                    post quantum encryption using Crystals-Kyber algorithm
                  </li>
                  <li>audio and video call recording</li>
                </ul>
                <h4 className="text-red-500 mt-5 text-lg">
                  Instant Messaging features :
                </h4>
                <ul className="list-disc text-gray-500 px-8">
                  <li>one-to-one and group instant messaging</li>
                  <li>ephemeral messaging</li>
                  <li>voice/video messaging</li>
                  <li>delivery and "is typing" notifications</li>
                  <li>
                    end-to-end encryption for one-to-one and group conversations
                  </li>
                  <li>
                    file sharing, with configurable settings to automatically /
                    manually download attachments
                  </li>
                </ul>
                <h4 className="text-red-500 mt-5 text-lg">
                  Secure communications :
                </h4>
                <ul className="list-disc text-gray-500 px-8">
                  <li>secure user authentication&nbsp;</li>
                  <li>
                    end-to-end&nbsp;encryption of audio/video
                    calls,&nbsp;messages and shared files
                  </li>
                  <li>post quantum encryption</li>
                  <li>ephemeral messaging</li>
                </ul>

                <p className="list-disc text-gray-500 px-8">
                  Consult our technical corner to see the list of supported
                  standards, download pre-compiled binaries or the SDK source
                  code, and find more information about available tutorials and
                  documentation.
                </p>

                <div className="mt-5">
                  <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 mb-24 hover:bg-red-500 hover:text-white duration-300">
                    TECHNICAL CORNER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto max-w-[1680px] p-7 bg-[#e9f2f7]"
        style={{
          background:
            "#e9f2f7 url(/images/productBottomGris.png) no-repeat bottom center",
        }}
      >
        <div className="mx-auto max-w-[1000px]">
          <div className="grid lg:grid-cols-2">
            <div className="pt-0 pr-5 pb-5 pl-5">
              <h2 className="text-4xl text-gray-500 font-semibold ">
                <div className="py-10">Flexisip Server</div>
              </h2>
              <p className="text-gray-500 text-justify">
                Flexisip is a complete and scalable SIP server suite that
                includes several modules: a proxy, a presence server, a
                conference server, a back-to-back user agent, and Flexisip
                account manager for the creation and administration of SIP
                accounts.
                <br />
                <br />
                Flexisip is an easy-to-install SIP server solution, offering all
                the features required to deploy your own SIP service tuned for
                mobile or desktop applications, « out of the box ».
                <br />
                <br />
                <span className="italic">
                  The free sip.linphone.org SIP service has run on Flexisip
                  since 2011, and enables Linphone users to create their own SIP
                  addresses to connect with each other.
                </span>
              </p>
              <h4 className="text-red-500 mt-5 text-lg">Proxy :</h4>
              <ul className="list-disc text-gray-500 px-8">
                <li>
                  NAT-aware with built-in media relay module and ICE/STUN
                  support
                </li>
                <li>
                  interconnected with Apple's and Google's&nbsp;push
                  notification&nbsp;systems
                </li>
                <li>
                  high availability and cluster mode for large deployments
                </li>
                <li>high-level event logging for activity monitoring</li>
                <li>digest and TLS client certificate authentication</li>
              </ul>
              <h4 className="text-red-500 mt-5 text-lg">Presence :</h4>
              <p className="text-gray-500 text-justify">
                Flexisip manages SIP SUBSCRIBE and PUBLISH from client
                applications, in order to :
              </p>
              <ul className="list-disc text-gray-500 px-8">
                <li>identify users of the service within the address book</li>
                <li>provide users with real-time presence status&nbsp;</li>
              </ul>
              <h4 className="text-red-500 mt-5 text-lg">
                Conference (for group chat and group calls):
              </h4>
              <ul className="list-disc text-gray-500 px-8">
                <li>entirely SIP-based solution</li>
                <li>efficient management of groups and participants</li>
                <li>multi-device support</li>
                <li>
                  notification of group events (users joining or leaving, new
                  admins etc.)
                </li>
              </ul>
              <h4 className="text-gray-900 mt-5 text-lg">B2BUA:</h4>
              <ul className="list-disc text-gray-500 px-8">
                <li>media encryption transcoding</li>
                <li>media codec transcoding</li>
                <li>SIP bridge, for interconnection with PSTN gateways</li>
              </ul>

              <h4 className="text-gray-700 mt-5 text-lg">
                Flexisip account manager:
              </h4>
              <ul className="list-disc text-gray-500 px-8">
                <li>
                  SIP account creation and management, by end-users or admins
                </li>
                <li>
                  remote provisioning of Linphone-based apps (including app's
                  settings,&nbsp;user account, contact list...)
                </li>
                <li>web admin platform</li>
              </ul>
              <br />

              <p className="text-gray-500 text-justify">
                Flexisip can be integrated into your SIP infrastructure for
                various purposes, for example IN THE CLOUD in order to run your
                own VoIP service, EMBEDDED in small hardware systems or in its
                PUSH GATEWAY mode of operation.
              </p>
              <br />

              <div className="mt-5">
                <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 mb-24 hover:bg-red-500 hover:text-white duration-300">
                  TECHNICAL CORNER
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center flex-wrap">
                <img
                  src="/images/site_web11.png"
                  alt="site web"
                  className="h-[500px]"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1680px] p-7">
        <div className="mx-auto max-w-[1000px]">
          <h3 className="text-4xl text-red-500 font-semibold text-center">
            Other components
          </h3>
          <div className="grid lg:grid-cols-2">
            <div>
              <div className="pt-0 pr-5 pb-5 pl-5">
                <h2 className="text-4xl text-gray-500 font-semibold ">
                  <div className="py-10">Post quantum encryption engine</div>
                </h2>
                <p className="text-gray-500 text-justify">
                  The Linphone application is most likely the very first open
                  source software in the world to provide post quantum
                  encryption to secure voice and video communications. For that
                  purpose, the Linphone team developed a modified version of
                  ZRTP, the well-known encryption protocol. This module is an
                  extension to the bctoolbox library providing Post Quantum
                  Cryptography using the Crystals-KYBER algorithm.
                </p>

                <div className="mt-5 text-center">
                  <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 hover:bg-red-500 hover:text-white duration-300">
                    TECHNICAL CORNER
                  </button>
                </div>
              </div>
              <div className="pt-0 pr-5 pb-5 pl-5">
                <h2 className="text-4xl text-gray-500 font-semibold ">
                  <div className="py-10">Mediastreamer2</div>
                </h2>
                <p className="text-gray-500 text-justify">
                  Mediastreamer2 is a powerful lightweight streaming engine for
                  voice/video telephony applications. <br />
                  This open source library is responsible for receiving and
                  sending all multimedia streams in Linphone, including
                  voice/video capture, encoding and decoding, and rendering.
                </p>

                <div className="mt-5 text-center">
                  <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 hover:bg-red-500 hover:text-white duration-300">
                    TECHNICAL CORNER
                  </button>
                </div>
              </div>
              <div className="pt-0 pr-5 pb-5 pl-5">
                <h2 className="text-4xl text-gray-500 font-semibold ">
                  <div className="py-10">Bcg729</div>
                </h2>
                <p className="text-gray-500 text-justify">
                  Bcg729 is an open source implementation of both encoder and
                  decoder of the ITU G729 Annex A/B speech codec.
                  <br /> The library is fully portable and can be executed on
                  many platforms including both ARM and x86 processors.
                  libbcg729 supports concurrent channels encoding/decoding for
                  multi call application such as conferencing.
                </p>

                <div className="mt-5 text-center">
                  <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 mb-24 hover:bg-red-500 hover:text-white duration-300">
                    TECHNICAL CORNER
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="pt-0 pr-5 pb-5 pl-5">
                <h2 className="text-4xl text-gray-500 font-semibold ">
                  <div className="py-10">
                    Tunnel: VoIP anti-blocking solution
                  </div>
                </h2>
                <p className="text-gray-500 text-justify">
                  Our tunnelling solution has been developed for VoIP operators
                  who wish to bypass VoIP blocking in some countries or
                  illegitimate firewall restrictions on 3G networks.
                  <br />
                  <br />
                  All SIP and RTP traffic is tunnelled through a single secure
                  https connection to a detunneliser server.
                </p>

                <div className="mt-5 text-center">
                  <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 hover:bg-red-500 hover:text-white duration-300">
                    TECHNICAL CORNER
                  </button>
                </div>
              </div>
              <div className="pt-0 pr-5 pb-5 pl-5">
                <h2 className="text-4xl text-gray-500 font-semibold ">
                  <div className="py-10">
                    Linphone Instant Messaging Encryption
                  </div>
                </h2>
                <p className="text-gray-500 text-justify">
                  Linphone Instant Messaging Encryption library (LIME) provides
                  end-to-end encryption for instant messaging, allowing users to
                  exchange messages privately and asynchronously. It supports
                  multiple devices per user and multiple users per device.
                  <br />
                  <br />
                  LIME offers two major security benefits to Instant Messaging
                  users:
                </p>
                <ul className="list-disc text-gray-500 px-8 mt-3">
                  <li>
                    End-to-end encryption, which means that only you and your
                    contact (and not even the server)&nbsp;can decrypt the
                    content that you shared
                  </li>
                  <li>
                    Perfect forward secrecy, which&nbsp;ensures that encrypted
                    messages cannot by decrypted by a third party, if a key
                    is&nbsp;compromised in the future
                  </li>
                </ul>

                <div className="mt-5 text-center">
                  <button className="w-[200px] text-xs text-red-500 border border-solid border-red-500 rounded-full h-10 p-2 hover:bg-red-500 hover:text-white duration-300">
                    TECHNICAL CORNER
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
