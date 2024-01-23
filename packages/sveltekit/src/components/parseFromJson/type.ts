type blockType = 
"box"
|"grid"
|"button"
|"checkbox"
|"comment"
|"columns"
|"single-column"
|"input"
|"select"
|"option"
|"image"
|"link"
|"form"
|"label"
|"section"
|"svg"
|"text"
|"textnode"
|"video"
|"svg-in"
|"textarea"
|"svelte-component"

type tagName = 
"b"
|"br"
|"circle"
|"dd"
|"div"
|"dl"
|"dt"
|"g"
|"iframe"
|"p"
|"path"
|"font"
|"footer"
|"header"
|"h1"
|"h2"
|"h3"
|"h4"
|"h5"
|"h6"
|"link"
|"main"
|"nav"
|"span"
|"section"

//type svelteTypes = "svelte-component";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface block {
    tagName?: tagName;
    type?: blockType; //| svelteTypes;
    style?: string;
    classes?: { name?: string; active?: boolean }[] | string[];
    attributes?: Record<string, any>;
    content?: string;
    void?: boolean;
    script?: string;
    'custom-name'?: string;
    components?: block[];
    /**Used for video block ie yt, html5 */
    provider?:string; 
    /**Used for videos and image blocks */
    src?:string;
    /**useful props for sveltekit */
    data?:unknown;
    svelteComponent?:unknown;
    options?:unknown;
}

export interface optionSlot {id:string, replaceWith?:block | null};
export interface options{
    slot : optionSlot[]
}
export type blinkComponents = block[];