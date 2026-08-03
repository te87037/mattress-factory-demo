import type {StructureResolver} from "sanity/structure";

export const studioStructure: StructureResolver = (S) =>
  S.list()
    .title("網站內容")
    .items([
      S.listItem()
        .id("site-settings")
        .title("聯絡與營業資訊")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("聯絡與營業資訊"),
        ),
      S.divider(),
      S.documentTypeListItem("product").title("床墊產品"),
    ]);
