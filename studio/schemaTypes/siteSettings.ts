import {defineField, defineType} from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "聯絡與營業資訊",
  type: "document",
  fields: [
    defineField({
      name: "brand",
      title: "公司名稱",
      type: "string",
      validation: (rule) => rule.required().min(2).max(40),
    }),
    defineField({
      name: "brandMark",
      title: "品牌縮寫",
      description: "網站左上角方形標誌內的文字，建議 1 個中文字。",
      type: "string",
      validation: (rule) => rule.required().min(1).max(2),
    }),
    defineField({
      name: "phone",
      title: "聯絡電話",
      type: "string",
      validation: (rule) =>
        rule.required().custom((value) => {
          const digits = String(value || "").replace(/\D/g, "");
          return digits.length >= 7 && digits.length <= 15
            ? true
            : "請輸入 7 至 15 位數字的電話號碼。";
        }),
    }),
    defineField({
      name: "address",
      title: "工廠與試躺地址",
      type: "string",
      validation: (rule) => rule.required().min(6).max(120),
    }),
    defineField({
      name: "city",
      title: "主要服務區域",
      description: "例如：苗栗、台中",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "serviceArea",
      title: "配送範圍",
      description: "例如：台灣本島配送（不含離島）",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "businessDays",
      title: "營業日",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "businessHours",
      title: "營業時間",
      type: "string",
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: "lunchBreak",
      title: "午休時間",
      type: "string",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "holidayNotice",
      title: "國定假日說明",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "visitNotice",
      title: "現場試躺說明",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "depositNotice",
      title: "訂金說明",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "paymentMethods",
      title: "付款方式",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "orderChangeNotice",
      title: "修改或取消說明",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "heritageYear",
      title: "家族開始製床年份",
      type: "string",
      validation: (rule) =>
        rule.required().regex(/^\d{4}$/, {name: "四位數年份"}),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "聯絡與營業資訊",
        subtitle: "電話、地址、營業時間與服務說明",
      };
    },
  },
});
