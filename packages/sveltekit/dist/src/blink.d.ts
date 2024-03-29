import type { ContentItem } from "./types/content.js";
export default class Blink {
    apiKey: string;
    constructor();
    init(apiKey: string, config?: {}): void;
    getContentItem(item?: number | string, dataFilter?: "html" | "json", collectionId?: number): Promise<ContentItem>;
}
