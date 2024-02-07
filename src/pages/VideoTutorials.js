import React, { useEffect, useState, useMemo } from "react";
function VideoTutorial() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const videoList = useMemo(() => {
    return [
      { id: 1, title: "1 | Training Video Overview", videoUrl: "UC8Promo.mp4" },
      { id: 2, title: "2 | Introduction", videoUrl: "1Introduction.mp4" },
      { id: 3, title: "3 | Mounting Options", videoUrl: "2MountingOptions.mp4" },
      { id: 4, title: "4 | Assembly", videoUrl: "3PhoneAssembly.mp4" },
      { id: 5, title: "5 | Powering Your Phone", videoUrl: "4PoweringYourPhone.mp4" },
      { id: 6, title: "6 | Phone Interface", videoUrl: "5IPPhoneUserInterface.mp4" },
      { id: 7, title: "7 | Making an External Call", videoUrl: "6MakingAnExternalCall.mp4" },
      { id: 8, title: "8 | Making an Internal Call", videoUrl: "7MakingAnInternalCall.mp4" },
      { id: 9, title: "9 | Answering a Call", videoUrl: "8AnsweringACall.mp4" },
      { id: 10, title: "10 | Call Waiting", videoUrl: "9CallWaiting.mp4" },
      { id: 11, title: "11 | Hanging Up a Call", videoUrl: "10HangingUpACall.mp4" },
      { id: 12, title: "12 | Transferring a Call", videoUrl: "11TransferringACall.mp4" },
      { id: 13, title: "13 | Call Pick Up", videoUrl: "12CallPickUp.mp4" },
      { id: 14, title: "14 | Conference Calling", videoUrl: "13ThreeWayConferenceCalling.mp4" },
      { id: 15, title: "15 | Call Forwarding", videoUrl: "14CallForwarding.mp4" },
      { id: 16, title: "16 | Do Not Disturb", videoUrl: "15DoNotDisturb.mp4" },
    ];
  }, []);
  // eslint-disable-next-line
  useEffect(() => {
    if (videoList.length > 0) {
      setSelectedVideo(videoList[0]);
    }
  }, [videoList]);
  const playVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="mb-48 mt-5">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 p-4 border-r">
              <ul>
                {videoList.map((video) => (
                  <li
                    key={video.id}
                    onClick={() => playVideo(video)}
                    className={`cursor-pointer text-lg py-1 ${
                      JSON.stringify(selectedVideo) === JSON.stringify(video)
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {video.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full text-center text-red-500 text-2xl font-bold">
              <p className="mb-5">{selectedVideo.title}</p>

              {selectedVideo ? (
                <video controls width="100%" src={selectedVideo.videoUrl} autoPlay/>
              ) : (
                <p>Select a video from the list to play.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoTutorial;
