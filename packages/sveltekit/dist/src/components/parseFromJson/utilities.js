export function parseAttributes(attributes, type = 'string') {
    const att = [];
    const attObj = {};
    for (const keys in attributes) {
        if (type == 'string') {
            att.push(`${keys}='${attributes[keys]}'`);
        }
        else {
            attObj[keys] = attributes[keys];
        }
    }
    if (type == 'string')
        return att.join(' ');
    else
        return attObj;
}
export const parseClass = (className) => {
    return className
        .map((cls) => {
        if (typeof cls == "string")
            return cls;
        else
            return cls.name;
    })
        .join(" ");
};
