import type { ContentItem, seo_fields, contentItemRequest} from "./types/content.js";

async function getContentItems(contentItemReq : contentItemRequest){
    let response : Response;
    let blinkUrl = `https://blinkcms.com/api/v1/content-item?api_token=${contentItemReq.api_token}&dataFilter=${contentItemReq.dataFilter}`;
    
    if (contentItemReq.item_id)blinkUrl=blinkUrl + `&item_id=${contentItemReq.item_id}`;
    if(contentItemReq.page_url)blinkUrl=blinkUrl + `&page_url=${contentItemReq.page_url}`;
    if(contentItemReq.collectionId)blinkUrl=blinkUrl + `&collection_id=${contentItemReq.collectionId}`;

    response = await fetch(blinkUrl);

    const data = await response.json() as ContentItem;

    //Parse this in system instead
    const seoFields = data.seo_fields as any;

    data.seo_fields = JSON.parse(seoFields) as seo_fields;

    return data;

}


export {getContentItems};