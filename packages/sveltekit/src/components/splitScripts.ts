import  { type ContentItem } from "../types/content.js";

export function splitScript(contentBody : ContentItem['body']){
    const scriptReg = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
    const innerScript = contentBody.html.match(scriptReg);

    let jsTag = null;
    if(innerScript){
       let newTag = innerScript[0];
       newTag = newTag.replace('<script>','');
       newTag = newTag.replace('</script>','');
       jsTag = `()=>{${newTag}}`;
       contentBody.html = contentBody.html.replace(scriptReg,'');
    }

    return {html:contentBody.html,js:jsTag}
    

}