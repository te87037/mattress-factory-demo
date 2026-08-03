import {zhHantLocale} from "@sanity/locale-zh-hant";
import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {schemaTypes} from "./schemaTypes";
import {studioStructure} from "./structure";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "kaili000";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "凱麗企業社內容後台",
  projectId,
  dataset,
  plugins: [
    structureTool({structure: studioStructure}),
    zhHantLocale({title: "繁體中文"}),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (previousActions, context) => {
      if (context.schemaType !== "siteSettings") return previousActions;

      return previousActions.filter(
        (action) => !["delete", "duplicate"].includes(action.action || ""),
      );
    },
  },
});
