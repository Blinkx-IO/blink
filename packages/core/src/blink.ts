import { getContentItems } from "./rest.js";
import { ContentItem, fetchMethod, contentItemRequest } from "./types/content.js";

export default class Blink {
    
    apiKey : string = '';
    fetchMethod : fetchMethod = 'node-fetch';
    
    constructor() {
        //this.apiKey = apiKey;
        
    }

    init(apiKey:string, config={fetchMethod:"node-fetch"}){
        this.apiKey = apiKey;

        this.fetchMethod = config.fetchMethod as fetchMethod;
        
    }

    /**
     * 
     * @param {number |  string} item 
     * @param {string} dataFilter 
     * @returns {Promise<ContentItem>}
     */
    async getContentItem(item? : number | string, dataFilter : "html" ='html', collectionId?:number): Promise<ContentItem>{
        
        let data : ContentItem;
        
        let request : contentItemRequest = {
            api_token:this.apiKey,
            dataFilter:dataFilter
        };

        if (collectionId)request.collectionId = collectionId;

        if(typeof(item) === "number"){
            request.item_id = item;
            data  = await getContentItems(request,this.fetchMethod) as ContentItem;
            
        }else if(typeof(item) === "string"){
            request.page_url = item;
            data  = await getContentItems(request,this.fetchMethod) as ContentItem;
            
        }else{
            throw new Error("Please provide either the item id or page url in as the item parameter");
            
        }
        
        return data;
        
    }



}