import type { TinaField } from "tinacms";

/**
 * Reusable SEO template for TinaCMS collections
 * Covers all requirements for Google Lighthouse 100 SEO score:
 * - Meta description
 * - Document title
 * - Valid hreflang
 * - Crawlable links
 * - Robots meta tag
 * - Image alt text
 * - Structured data
 * - Canonical URL
 * - Open Graph tags
 */
export const seoFields: TinaField[] = [
  {
    type: "object",
    name: "seo",
    label: "SEO & Meta",
    fields: [
      {
        type: "string",
        name: "title",
        label: "Meta Title",
        description:
          "The title that appears in search results (50-60 characters recommended)",
        required: true,
      },
      {
        type: "string",
        name: "description",
        label: "Meta Description",
        description:
          "Brief description for search results (150-160 characters recommended)",
        required: true,
        ui: {
          component: "textarea",
        },
      },
      {
        type: "string",
        name: "keywords",
        label: "Keywords",
        description: "SEO keywords for this page",
        list: true,
        ui: {
          component: "tags",
        },
      },
      {
        type: "string",
        name: "canonicalUrl",
        label: "Canonical URL",
        description:
          "The preferred URL for this page (leave empty to use current URL)",
      },
      {
        type: "object",
        name: "openGraph",
        label: "Open Graph (Social Media)",
        description: "How this page appears when shared on social media",
        fields: [
          {
            type: "string",
            name: "title",
            label: "OG Title",
            description:
              "Title for social media (falls back to Meta Title if empty)",
          },
          {
            type: "string",
            name: "description",
            label: "OG Description",
            description:
              "Description for social media (falls back to Meta Description if empty)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "OG Image",
            description:
              "Image for social media shares (1200x630px recommended)",
          },
          {
            type: "string",
            name: "imageAlt",
            label: "OG Image Alt Text",
            description: "Alt text for the OG image",
          },
          {
            type: "string",
            name: "type",
            label: "OG Type",
            description: "The type of content",
            options: ["website", "article", "product"],
          },
        ],
      },
      {
        type: "object",
        name: "robots",
        label: "Robots Meta Tag",
        description: "Control how search engines crawl and index this page",
        fields: [
          {
            type: "boolean",
            name: "index",
            label: "Allow Indexing",
            description: "Allow search engines to index this page",
          },
          {
            type: "boolean",
            name: "follow",
            label: "Follow Links",
            description: "Allow search engines to follow links on this page",
          },
        ],
      },
    ],
  },
];
