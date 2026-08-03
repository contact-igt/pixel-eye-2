import React from "react";

const SPACING_MAP = {
  small: "16px",
  medium: "32px",
  large: "64px",
};

export default function BlogSpacer({ settings = {} }) {
  const height = SPACING_MAP[settings?.size || settings?.height] || SPACING_MAP.medium;
  return <div style={{ height, width: "100%" }} aria-hidden="true" />;
}
