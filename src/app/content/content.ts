import { Licence } from "../models/licence";

export class Content {
    id: number;
    contentName: string;
    contentStatus: string;
    contentPosterUrl: string;
    contentVideoUrl: string;
    contentDescription: string;
    contentLicences: Licence[]
}