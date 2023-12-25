import "../styles/globals.css";

import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      // richTextComponents={{
      //   heading1: ({ children }) => <Heading>{children}</Heading>,
      //   paragraph: ({ children }) => <p className="paragraph">{children}</p>,
      // }}
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link legacyBehavior href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
