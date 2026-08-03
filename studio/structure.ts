import type {StructureResolver} from "sanity/structure";

export const studioStructure: StructureResolver = (S) =>
  S.list()
    .id("website-content")
    .title("網站內容")
    .items([
      S.listItem()
        .id("site-settings")
        .schemaType("siteSettings")
        .title("聯絡與營業資訊")
        .child(
          S.document()
            .id("site-settings-editor")
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("聯絡與營業資訊"),
        ),
      S.divider(),
      S.documentTypeListItem("product")
        .id("products")
        .title("床墊產品（按＋新增）"),
    ]);
