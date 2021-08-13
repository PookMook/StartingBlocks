import React from "react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { getCssText } from "ui/stitches.config"

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
