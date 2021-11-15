import fetch from "node-fetch";
import { ContentItem, seo_fields } from "./types/content";

interface contentItemRequest{
    api_token : string;
    item_id? : number;
    page_url? : string;
    dataFilter: "html";
}

async function getContentItems(contentItemReq : contentItemRequest){

    const response = await fetch(
        `https://blinkcms.com/api/v1/content-item?api_token=${contentItemReq.api_token}&item_id=${contentItemReq.item_id}&dataFilter=${contentItemReq.dataFilter}`
    )

    const data = await response.json() as ContentItem;

    //Parse this in system instead
    const seoFields = data.seo_fields as any;

    data.seo_fields = JSON.parse(seoFields) as seo_fields;

    return data;

};


export {getContentItems};