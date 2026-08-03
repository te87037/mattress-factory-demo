import {defineField, defineType} from "sanity";

export const product = defineType({
  name: "product",
  title: "床墊產品",
  type: "document",
  initialValue: {
    visible: true,
    order: 10,
    features: [],
  },
  fields: [
    defineField({
      name: "visible",
      title: "顯示在官網",
      description: "關閉後產品仍會保留在後台，但不會出現在官網。",
      type: "boolean",
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "顯示順序",
      description: "數字越小越前面，例如 1、2、3、4。新增產品可先填 10。",
      type: "number",
      initialValue: 10,
      validation: (rule) => rule.required().integer().min(0).max(999),
    }),
    defineField({
      name: "name",
      title: "產品名稱",
      type: "string",
      validation: (rule) => rule.required().min(2).max(60),
    }),
    defineField({
      name: "contentId",
      title: "舊版系統識別碼",
      type: "slug",
      hidden: true,
      readOnly: true,
      options: {
        source: "name",
        maxLength: 80,
      },
    }),
    defineField({
      name: "tag",
      title: "產品標籤",
      description: "例如：主打品項、產品類別、特殊尺寸。",
      type: "string",
      validation: (rule) => rule.required().max(30),
    }),
    defineField({
      name: "description",
      title: "產品描述",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required().min(10).max(500),
    }),
    defineField({
      name: "images",
      title: "產品照片（可多張）",
      description: "可上傳 1 至 8 張，拖曳即可調整輪播順序；第一張會作為封面。",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            accept: "image/jpeg,image/png,image/webp",
          },
          fields: [
            defineField({
              name: "alt",
              title: "照片說明",
              description: "簡短描述照片內容，供搜尋引擎與無障礙閱讀使用。",
              type: "string",
              validation: (rule) => rule.max(120),
            }),
          ],
        },
      ],
      validation: (rule) => rule.max(8),
    }),
    defineField({
      name: "image",
      title: "舊版單張照片",
      type: "image",
      hidden: true,
      readOnly: true,
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "照片說明",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "features",
      title: "產品特色",
      description: "建議填寫 2 至 4 項，每項保持簡短。",
      type: "array",
      of: [{type: "string"}],
      validation: (rule) => rule.required().min(1).max(6).unique(),
    }),
  ],
  orderings: [
    {
      title: "官網顯示順序",
      name: "websiteOrder",
      by: [{field: "order", direction: "asc"}],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tag",
      media: "images.0",
      legacyMedia: "image",
      visible: "visible",
    },
    prepare({title, subtitle, media, legacyMedia, visible}) {
      return {
        title: title || "未命名產品",
        subtitle: `${visible === false ? "已隱藏 · " : ""}${subtitle || "未填標籤"}`,
        media: media || legacyMedia,
      };
    },
  },
});
