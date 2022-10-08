import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = (props) => (
  <div className="video-responsive">
    <iframe
      width={props.width}
      height={props.height}
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
