export interface SearchInputType {
    keywords: File;
}
export interface SearchResponseType {
    id: number;
    keyword_name: string;
    total_adwords: number;
    total_links: number;
    total_search_results: number;
    html_code: string;
}
