import { Genre } from "./Genre";
import { PlatForm } from "./PlatForm";
import { Publisher } from "./Publisher";


export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: PlatForm; }[];
  metacritic: number;
  rating_top: number;
}
