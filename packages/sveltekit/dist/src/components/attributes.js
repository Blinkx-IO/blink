export function parseAttributes(attributes, type = 'string', classes) {
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
    if (classes) {
        classes.forEach((cls) => {
            if (typeof cls === 'string' || ('name' in cls)) {
                if (type == 'string')
                    att.push(`class='${cls}'`);
                else if (typeof cls === 'object' && 'name' in cls)
                    attObj['class'] = cls.name;
            }
            else {
            }
        });
    }
    if (type == 'string')
        return att.join(' ');
    else
        return attObj;
}
