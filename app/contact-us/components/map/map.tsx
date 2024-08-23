import React from "react";

const Map = () => {
  return (
    //  8xl:w-[90%]
    <div className="lg:w-[80%] mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1148633616203!2d51.41863247525238!3d35.723393527657635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e017c80afef33%3A0xe469d1388ce733fb!2z2LTYsdqp2Kog2KjbjNmGINin2YTZhdmE2YTbjCDaqduM2qnYp9mI2YjYsyDYstmF2KfZhg!5e0!3m2!1sen!2sde!4v1703006342566!5m2!1sen!2sde"
        // allowfullscreen="true"
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        className="mx-auto w-full lg:h-[300px]"
      ></iframe>
    </div>
  );
};

export default Map;
