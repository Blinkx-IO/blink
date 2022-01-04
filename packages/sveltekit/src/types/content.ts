interface contentBody {
  css: string;
  html: string;
}

interface seo_fields {
  siteTitle: string,
  siteDescription: string,
  favicon: string,
  metaImage: string,
  keywords: string,
  author: string
}

interface ContentItem {
  title: string;
  item_id: number;
  body: contentBody;
  status: string;
  content_type: string;
  author: string;
  published_date: string;
  seo_fields: seo_fields;
  page_url: string;
  //collectionId:number;
}

interface contentItemRequest{
  api_token : string;
  item_id? : number;
  page_url? : string;
  collectionId?:number;
  dataFilter: "html";
}

type fetchMethod = 'node-fetch' | 'window-fetch';

interface Collections {
  content_items: ContentItem[];
}

export {contentBody, seo_fields, ContentItem , Collections, fetchMethod, contentItemRequest};