/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type {block} from "./type.js";

export function parseAttributes(attributes: Record<string, unknown>, type: 'string' | 'obj' = 'string', /*classes?: block['classes']*/) {
    const att = [];
    const attObj = [];
    for (const keys in attributes) {
        if (type == 'string') {
            att.push(`${keys}='${attributes[keys]}'`);
        } else {
            attObj[keys] = attributes[keys];
        }
    }

    /*if (classes) {
        classes.forEach((cls) => {
            if (cls.length) {
                //console.log('str',cls)
                if (type == 'string') att.push(`class='${cls}'`);
                else attObj['class'] = cls;
            } else {
                if (type == 'string') att.push(`class='${cls.name}'`);
                else attObj['class'] = cls.name;

                //console.log('obj',cls)
            }
        });
    }*/

    if (type == 'string') return att.join(' ');
    else return attObj as any;
}

export const parseClass = (className: block["classes"]) => {
    return className!
        .map((cls) => {
            if (typeof cls == "string") return cls;
            else return cls.name;
        })
        .join(" ");
};
