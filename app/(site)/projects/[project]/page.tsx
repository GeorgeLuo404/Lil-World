import { getProject, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import ImageSlider from "./image-slider";

type Props = {
  params: Promise<{ project: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ project: project.slug }));
}

export default async function Project({ params }: Props) {
  const { project: slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();
  if (!project.images || project.images.length === 0) return <div>No images available.</div>;

  const createdAt = project.createdAt
    ? new Date(project.createdAt).toLocaleString("zh-CN", {
      timeZone: "Australia/Sydney", // 🔥 Ensures it follows Sydney time
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    : "N/A";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Swiper Image Slider */}
      <ImageSlider images={project.images} alt={project.name} />

      {/* Project Info */}
      <h1 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
        {project.name}
      </h1>
      <p className="text-sm text-gray-500 mb-6">发布于 {createdAt}</p>

      {/* Project Content */}
      <div className="prose prose-lg text-gray-700">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
