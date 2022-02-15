interface contentBody {
    css: string;
    html: string;
}
interface seo_fields {
    siteTitle: string;
    siteDescription: string;
    favicon: string;
    metaImage: string;
    keywords: string;
    author: string;
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
}
interface contentItemRequest {
    api_token: string;
    item_id?: number;
    page_url?: string;
    collectionId?: number;
    dataFilter: "html" | "json";
}
declare type fetchMethod = 'node-fetch' | 'window-fetch';
interface Collections {
    content_items: ContentItem[];
}
interface block {
    tagName: string;
    type: string;
    style: string;
    classes?: {
        name: string;
        active: boolean;
    }[] | 'string'[];
    attributes: Record<string, any>;
    content: string;
    void: boolean;
    'custom-name': string;
    components: block[];
}
declare type blinkComponents = block[];
export type { contentBody, seo_fields, ContentItem, Collections, fetchMethod, contentItemRequest, block, blinkComponents };
