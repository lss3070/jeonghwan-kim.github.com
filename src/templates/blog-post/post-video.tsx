import React from 'react';
import './post-video.scss';
import { Video } from '../../models/site';

interface P {
  videos: Video[];
  videoId: string | number;
}

const PostVideo: React.FC<P> = ({videos, videoId}) => {
  const video = videos.filter(v => v.id === videoId)[0]
  if (!video) return;

  return (
    <div className="post-video">
      <a id="post-video" href={video.url} >
        <img src={ video.thumb} />
        <div className="post-video-overlay">
          <div className="video-icon-wrapper">
            <div className="video-icon"></div>
          </div>
          <div className="post-video-title">
            {video.title ? video.title : '영상 더보기'} &raquo;
          </div>
        </div>
      </a>
    </div>
  )
}

export default PostVideo;
