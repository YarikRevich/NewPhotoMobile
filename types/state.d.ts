export declare interface serviceI{
    ok: boolean;
    message: string;
}

export declare interface PhotoPage{
    result: {
        photo: string
        thumbnail: string
        tags: string[]
    }[];
    service: serviceI;
}

export declare interface State{
    photoPage: PhotoPage;

}