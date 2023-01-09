import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as MicroStacks from "@micro-stacks/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MicroStacks.ClientProvider appName="Bitcoin Faces" appIconUrl="TODO.png">
      <Component {...pageProps} />
    </MicroStacks.ClientProvider>
  );
}
