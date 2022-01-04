import { ContentItem, contentItemRequest } from "./types/content.js";
declare function getContentItems(contentItemReq: contentItemRequest): Promise<ContentItem>;
export { getContentItems };
