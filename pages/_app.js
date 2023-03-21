import "./style.css";

import React from "react";
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  React.useEffect(() => import("@lottiefiles/lottie-player"));
  return <Component {...pageProps} />;
}
