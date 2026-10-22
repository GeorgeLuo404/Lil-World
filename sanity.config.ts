"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas"

const config = defineConfig({
	projectId: "qzdi78un",
	dataset: "production",
	title: "My Personal Website",
	apiVersion: "2023-04-27",
	basePath: "/admin",
	plugins: [structureTool()],
	schema: { types: schemas }
});

export default config;