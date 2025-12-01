import { Collection } from "tinacms";
import { seoFields } from "../templates/seo";

/**
 * @type {import('tinacms').Collection}
 */
const pageCollection: Collection = {
  label: "Pages",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    ...seoFields,
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      } else {
        return `/${document._sys.filename}`;
      }
    },
  },
};

export default pageCollection;
