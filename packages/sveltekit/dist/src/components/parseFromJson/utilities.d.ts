import type { block } from "./type.js";
export declare function parseAttributes(attributes: Record<string, unknown>, type?: 'string' | 'obj'): any;
export declare const parseClass: (className: block["classes"]) => string;
