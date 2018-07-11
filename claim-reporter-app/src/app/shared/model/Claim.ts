import {Reporter} from "./Reporter";
import {Photo} from "./Photo";
import {DictionaryItem} from "./DictionaryItem";

export class Claim {
  carMark: DictionaryItem;
  carModel: string;
  carNumber: string;
  reporter: Reporter;
  photos: Photo[];
  numberOfPhotos: number;

  constructor() {
    this.reporter = <Reporter> {};
    this.photos = [];
  }
}
