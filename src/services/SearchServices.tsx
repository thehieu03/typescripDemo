import type {SearchResponse} from "../Models/SearchResponse.tsx";
import {type ApiEnvelope, httpGet} from "../utils/http.tsx";

type SearchType='less'|'more'
class SearchServices{
    async search(q:string,type:SearchType='less'):Promise<SearchResponse[]>{
        const body=await httpGet<ApiEnvelope<SearchResponse[]>>('users/search',{
            params:{
                q,
                type
            }
        });
        return body.data;
    }
}
export const searchServices = new SearchServices();