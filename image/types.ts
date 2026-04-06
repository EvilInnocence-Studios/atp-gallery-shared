import { NewObj } from "@core-shared/express/types";

export interface IGalleryImage {
    id: string;
    title: string;
    url: string;
    description: string;
    enabled: boolean;
    sortOrder: number;
    postDate: Date;
}

export type NewGalleryImage = NewObj<IGalleryImage>;
