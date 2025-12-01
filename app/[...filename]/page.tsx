import ClientPage from "./client-page";
import client from "../../tina/__generated__/client";
import { generateMetadataFromSEO } from "../utils/metadata";
import { Metadata } from "next";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export async function generateMetadata({
  params,
}: {
  params: { filename: string[] };
}): Promise<Metadata> {
  const data = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });

  return generateMetadataFromSEO(data.data.page.seo);
}

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });

  return <ClientPage {...data} />;
}
