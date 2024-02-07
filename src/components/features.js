import React from "react";

export default function Overview() {
  return (
    <div className="w-full h-full ">
      <h2 className="text-4xl font-semibold text-red-400 mt-5">
        Common Features (Mobile and Desktop)
      </h2>
      <p className="text-gray-500 font-semibold mt-5">OVERALL FEATURES</p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>HD audio and video calls</li>
          <li>Multiple call management (pause and resume)</li>
          <li>Call transfer (blind and attended)</li>
          <li>
            Audio and video conferencing, based on a modern Selective Forwarding
            Unit (SFU)
          </li>
          <li>Call recording and replay </li>
          <li>Instant Messaging and group chat</li>
          <li>Message delivery status (IMDN)</li>
          <li>File sharing (audio, video, documents, gifs...)</li>
          <li>Message forward, copy, reply to</li>
          <li>Chat access during calls</li>
          <li>Contact list</li>
          <li>"Invite your friends" feature</li>
          <li>Presence status</li>
          <li>Call history</li>
          <li>Support for bluetooth headset</li>
          <li>Display of advanced call statistics</li>
          <li>Echo cancellation</li>
          <li>Call quality indicator</li>
          <li>Supported languages: English, French</li>
          <li>Account creation assistant</li>
          <li>Remote provisioning (via Qr code or URL)</li>
          <li>
            Secure user authentication: md5 / SHA256 digest, TLS client
            certificates
          </li>
          <li>End-to-end encryption for calls via SRTP, zRTP and SRTP-DTLS</li>
          <li>
            End-to-end encryption for messaging, using Linphone Instant
            Messaging Encryption (LIME)
          </li>
          <li>
            Post quantum call encryption, using CRYSTALS-Kyber algoritm (the
            winning of an
            <a href="/">international competition run by the American NIST</a>
            between 2016 and 2022).
          </li>
        </ul>
      </div>
      <p className="text-gray-500 font-semibold mt-5">ADVANCED FEATURES</p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>
            Audio codecs: opus, speex, g711, g729, gsm, iLBC, AMR, AMR-WB, g722,
            SILK, iSAC, BV16, Codec2
          </li>
          <li>
            Video codecs: VP8, H.264 and H.265 with resolutions up to 1080P,
            MPEG4
          </li>
          <li>
            Hardware accelerated H.264 and H.265 codec for Mac OSX / iOS
            (VideoToolbox) and Android (MediaCodec)
          </li>
          <li>
            Innovative RTP jitter buffer algorithm, which quickly adapts to
            network conditions with a lot of jitter and improves control of the
            audio latency
          </li>
          <li>
            Adaptive bit rate control algorithm: congestion control and
            estimation of available bandwidth, in order to optimise the quality
            of audio and video
          </li>
          <li>
            Integration with push notification (requires compatible SIP server;
            <a href="/">
              <strong>
                <em>
                  <span>linphone.org SIP service</span>
                </em>
              </strong>
            </a>
            is push enabled)
          </li>
          <li>
            ICE (RFC 5245), STUN and TURN (RFC 5766) for optimised NAT
            traversal, allowing for peer-to-peer audio and video connections
            whenever possible
          </li>
          <li>
            Call handover accross a change of network access type (e.g. start a
            call in wifi and continue in 3G)
          </li>
          <li>
            Ability to configure multiple proxy accounts with different
            transports protocols (UDP, TCP, TLS)
          </li>
          <li>IPv6 (dual-stack and v6-only support)</li>
          <li>DTMF (telephone tone) support using SIP INFO or RFC 4733</li>
        </ul>
      </div>

      <h2 className="text-4xl font-semibold text-red-400 mt-5">
        Mobile-specific features (iOS/Android)
      </h2>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>
            Smart contact list (shows people using the service)&nbsp;using list
            subscription to a presence server
          </li>
          <li>Dedicated tablet user interface</li>
          <li>Blind accessibility</li>
        </ul>
      </div>
      <p className="text-gray-500">
        Linphone is available on the following mobile platforms:
      </p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>
            Smart contact list (shows people using the service)&nbsp;using list
            subscription to a presence server
          </li>
          <li>Dedicated tablet user interface</li>
          <li>Blind accessibility</li>
        </ul>
      </div>
      <p className="text-gray-900 font-medium">iOS ADDITIONAL FEATURES</p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>AAC-ELD support</li>
        </ul>
      </div>
      <p className="text-gray-900 font-medium">ANDROID ADDITIONAL FEATURES</p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>Video overlay</li>
        </ul>
      </div>

      <h2 className="text-4xl font-semibold text-red-400 mt-5">
        Desktop-specific features
      </h2>
      <p className="text-gray-500 mt-5 ">
        The Qt (QML) graphical interface runs on GNU/Linux, Windows and macOS.
      </p>

      <p className="text-gray-900 font-medium mt-5">ANDROID ADDITIONAL FEATURES</p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li>HD video calls in full screen mode</li>
          <li>Smart search bar</li>
          <li>Unified history</li>
          <li>Quick access to recent events</li>
        </ul>
      </div>

      <p className="text-gray-900 font-medium">PORTABILITY</p>
      <div className="p-5">
        <ul className="list-disc text-gray-500">
          <li className="text-gray-900 font-medium">GNU/Linux: x86, x86-64, ARM v5, v7, arm64 ; Debian 8/9, Centos 7</li>
          <li className="text-gray-900 font-medium">Windows Desktop: x86 (works also on x86_64), Windows 7 and later</li>
          <li className="text-gray-900 font-medium">Mac OS X: x86_64 ; 10.11 and later.</li>
          <li><span className="text-gray-900 font-medium">GNU/Linux embedded:</span> linphone-daemon is a good candidate to provide the software stack for a hardware phone or hardware communication system.</li>
        </ul>
      </div>
    </div>
  );
}
