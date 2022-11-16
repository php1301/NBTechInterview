export interface SearchInputType {
    keywords: File;
}
export interface SearchResponseType {
    id: number;
    keyword: string;
    totalAds: string;
    totalLinks: string;
    totalResults: string;
    htmlLink: string;
    searchTime: string;
}

export interface UserUploadSearchInputType {
    keyword: string;
}
