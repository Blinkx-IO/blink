import { type ContentItem } from "../types/content.js";
export declare function splitScript(contentBody: ContentItem['body']): {
    html: string;
    js: string | null;
};
