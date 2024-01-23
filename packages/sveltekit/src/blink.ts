import { getContentItems } from "./rest.js";
import type { ContentItem, fetchMethod, contentItemRequest } from "./types/content.js";

export default class Blink {
    
    apiKey : string = '';
    
    constructor() {
        //this.apiKey = apiKey;
        
    }

    init(apiKey:string, config={}){
        this.apiKey = apiKey;
        
    }

    /**
     * 
     * @param {number |  string} item 
     * @param {string} dataFilter 
     * @returns {Promise<ContentItem>}
     */
    async getContentItem(item? : number | string, dataFilter : "html" | "json" ='html', collectionId?:number): Promise<ContentItem>{
        if(this.apiKey === ''){
            throw new Error("Please provide an api key");
        }
        let data : ContentItem;
        
        let request : contentItemRequest = {
            api_token:this.apiKey,
            dataFilter:dataFilter
        };

        if (collectionId)request.collectionId = collectionId;

        if(typeof(item) === "number"){
            request.item_id = item;
            data  = await getContentItems(request) as ContentItem;
            
        }else if(typeof(item) === "string"){
            request.page_url = item;
            data  = await getContentItems(request) as ContentItem;
            
        }else{
            throw new Error("Please provide either the item id or page url in as the item parameter");
            
        }
        
        return data;
        
    }



}