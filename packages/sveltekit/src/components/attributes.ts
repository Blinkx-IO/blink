import type { block } from '../types/content';
export function parseAttributes(attributes: Record<string, any>, type: 'string' | 'obj' = 'string', classes? : block['classes']) {
    const att = [];
    const attObj: Record<string, any> = {};
    for (const keys in attributes) {
        if (type == 'string') {
            att.push(`${keys}='${attributes[keys]}'`);
        } else {
            attObj[keys] = attributes[keys];
        }
    }

    if (classes){
        classes.forEach((cls)=>{
            if(typeof cls === 'string' || ('name' in cls)){
                
                if(type == 'string')att.push(`class='${cls}'`);
                else if (typeof cls === 'object' && 'name' in cls) attObj['class'] = cls.name;
            }else{
                /*
                if ('name' in cls && cls.name){
                    if(type == 'string')att.push(`class='${cls.name}'`);
                    else attObj['class'] = cls.name;
                }
                */
            }
        });
        
        
    }

    if (type == 'string') return att.join(' ');
    else return attObj;
}