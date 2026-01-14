import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    pictures:string[];
    technologies: Tag[];
    link?: string;
}