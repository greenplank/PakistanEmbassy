import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.0524203161367!2d13.07343051608335!3d55.56628601382886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a1c72cf05d93%3A0xc4f9036acfb17540!2sSadelgatan%209%2C%20213%2077%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2s!4v1627567568164!5m2!1sen!2s"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
