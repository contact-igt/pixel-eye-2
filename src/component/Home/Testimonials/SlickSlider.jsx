import React, { forwardRef } from "react";
import Slider from "react-slick";

const SlickSlider = forwardRef((props, ref) => {
  return <Slider ref={ref} {...props} />;
});

SlickSlider.displayName = "SlickSlider";
export default SlickSlider;
