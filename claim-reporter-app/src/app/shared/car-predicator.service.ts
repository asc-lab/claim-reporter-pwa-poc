import {Injectable} from "@angular/core";

@Injectable()
export class CarPredicatorService {

  predicate() {
    alert('In this place application should use Cognitive API for predicate Car mark/car model/car number.');
    console.log('Use Cognitive API for predicate Car mark/car model/car number.');
  }
}
