import { getContentItems } from "./rest.js";
import "./types/content.js";
export default class Blink {
    apiKey = '';
    constructor() {
    }
    init(apiKey, config = {}) {
        this.apiKey = apiKey;
    }
    async getContentItem(item, dataFilter = 'html', collectionId) {
        let data;
        let request = {
            api_token: this.apiKey,
            dataFilter: dataFilter
        };
        if (collectionId)
            request.collectionId = collectionId;
        if (typeof (item) === "number") {
            request.item_id = item;
            data = await getContentItems(request);
        }
        else if (typeof (item) === "string") {
            request.page_url = item;
            data = await getContentItems(request);
        }
        else {
            throw new Error("Please provide either the item id or page url in as the item parameter");
        }
        return data;
    }
}
