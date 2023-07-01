export interface IQuote {
    author: string;
    category: string;
    text: string;
}

export interface IQuoteWithID {
    id: string;
    author: string;
    category: string;
    text: string;
}

export interface IQuoteApi {
    [id: string]: IPost;
}