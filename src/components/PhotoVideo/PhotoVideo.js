import React from "react";
import s from "./photo-video.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "video-react/dist/video-react.css";
import ImageGallery from "react-image-gallery";

const PhotoVideo = ({ pictures, video }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.gallery}>
        <ImageGallery
          items={pictures}
          showBullets={true}
          showIndex={true}
          thumbnailPosition={"bottom"}
        />
      </div>
      <div className={s.video_player}>
        <iframe
          title="Video about country"
          width="100%"
          height="335"
          src={video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PhotoVideo;
