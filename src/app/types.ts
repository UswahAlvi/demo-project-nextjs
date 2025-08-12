export type Item = {
    title: string,
    description: string,
    image: string,
    url:string,
    category: string
}
export enum Status{
    'idle',
    'pending',
    'successful', 
    'unsuccessful', 
    'timed-out'
}

export type FetchData = (query : string) => Promise<any>
