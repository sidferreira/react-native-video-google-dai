import React from 'react';
import { requireNativeComponent } from 'react-native';
import RNVideo from 'react-native-video';

const RCTVideoGoogleDAI = requireNativeComponent('RCTVideoGoogleDAI', null);

const VideoGoogleDAI = ({ playerRef, daiRef, style, ...playerProps }) => {
  const videoRef = React.useRef();

  React.useEffect(() => {
    if (videoRef.current) {
      playerRef(videoRef.current);
    }
  }, [playerRef]);

  return (
    <>
      <RCTVideoGoogleDAI ref={daiRef} style={style}>
        <RNVideo
          nativeID="RCTVideoGoogleDAI"
          {...playerProps}
          ref={videoRef}
          style={{ flex: 1 }}
        />
      </RCTVideoGoogleDAI>
    </>
  );
};

export default VideoGoogleDAI;
