import type { block } from '../types/content';
export function parseAttributes(attributes: Record<string, any>, type: 'string' | 'obj' = 'string', classes? : block['classes']) {
    const att = [];
    const attObj = [];
    for (const keys in attributes) {
        if (type == 'string') {
            att.push(`${keys}='${attributes[keys]}'`);
        } else {
            attObj[keys] = attributes[keys];
        }
    }

    if (classes){
        classes.forEach((cls)=>{
            if(cls.length){
                
                if(type == 'string')att.push(`class='${cls}'`);
                else attObj['class'] = cls;
            }else{
                if(type == 'string')att.push(`class='${cls.name}'`);
                else attObj['class'] = cls.name;

                
            }
        });
        
        
    }

    if (type == 'string') return att.join(' ');
    else return attObj as any;
}