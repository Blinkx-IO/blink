import { getContentItems } from "./rest.js";
import { ContentItem } from "./types/content";

export default class Blink {
    
    apiKey : string = '';
    
    constructor() {
        //this.apiKey = apiKey;
        
    }

    init(apiKey:string){
        this.apiKey = apiKey;
    }

    /**
     * 
     * @param {number |  string} item 
     * @param {string} dataFilter 
     * @returns {Promise<ContentItem>}
     */
    async getContentItem(item? : number | string, dataFilter : "html" ='html'): Promise<ContentItem>{
        
        let data : ContentItem;
        
        if(typeof(item) === "number"){
            data  = await getContentItems({api_token:this.apiKey,item_id:item,dataFilter:dataFilter}) as ContentItem;
            
        }else if(typeof(item) === "string"){
            data  = await getContentItems({api_token:this.apiKey,page_url:item,dataFilter:dataFilter}) as ContentItem;
            
        }else{
            throw new Error("Please provide either the item id or page url in as the item parameter");
            
        }
        
        return data;
        
    }



}