import NextDocument, { DocumentContext } from "next/document"
import { getCssString } from "ui/stitches.config"

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const styles = getCssString()
    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: <style id="stitches">{styles}</style>,
    }
  }
}
