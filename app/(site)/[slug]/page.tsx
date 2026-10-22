import { getPage, getPages } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (page == null) {
    return <></>;
  }

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
