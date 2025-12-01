import { Metadata } from "next";

type SEOData = {
  title?: string | null;
  description?: string | null;
  canonicalUrl?: string | null;
  keywords?: (string | null)[] | null;
  robots?: {
    index?: boolean | null;
    follow?: boolean | null;
  } | null;
  openGraph?: {
    title?: string | null;
    description?: string | null;
    image?: string | null;
    imageAlt?: string | null;
    type?: string | null;
  } | null;
  structuredData?: {
    type?: string | null;
    json?: string | null;
  } | null;
};

/**
 * Generate Next.js metadata from TinaCMS SEO data
 * @param seo - SEO data from TinaCMS
 * @returns Next.js Metadata object
 */
export function generateMetadataFromSEO(seo?: SEOData | null): Metadata {
  if (!seo) return {};

  return {
    title: seo.title ?? undefined,
    description: seo.description ?? undefined,
    ...(seo.canonicalUrl && {
      alternates: {
        canonical: seo.canonicalUrl,
      },
    }),
    robots: {
      index: seo.robots?.index ?? true,
      follow: seo.robots?.follow ?? true,
    },
    keywords: seo.keywords?.filter((k): k is string => k !== null),
    openGraph: {
      title: seo.openGraph?.title ?? seo.title ?? undefined,
      description: seo.openGraph?.description ?? seo.description ?? undefined,
      type: (seo.openGraph?.type as "website" | "article") || "website",
      ...(seo.openGraph?.image && {
        images: [
          {
            url: seo.openGraph.image,
            alt: seo.openGraph.imageAlt || seo.title || "",
          },
        ],
      }),
    },
  };
}
