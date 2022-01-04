import {fetchMethod} from "../types/content.js";
import fetch from "node-fetch";

export default function determineFetchMethod(fetchType : fetchMethod) {
    if (fetchType == "node-fetch"){
        return fetch;
    }else{
        return false;
    }
}


