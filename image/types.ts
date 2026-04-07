<<<<<<< HEAD
import { NewObj } from "../../core-shared/express/types";
=======
import { NewObj } from "@core-shared/express/types";
>>>>>>> d7eab8f4093da50e74252dcf68a1f027da7d069a

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
