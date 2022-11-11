export interface SearchInputType {
    keywords: File;
}
export interface SearchResponseType {
    id: number;
    keyword: string;
    totalAds: number;
    totalLinks: number;
    totalResults: number;
    htmlLink: string;
    searchTime: string;
}

export interface UserUploadSearchInputType {
    keyword: string;
}
