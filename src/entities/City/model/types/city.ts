interface LocalName {
    [key: string]: string;
}

export interface City{
    country?: string;
    lat?:number;
    local_names?: LocalName;
    lon?:number;
    name?:string;
    state?: string;
}