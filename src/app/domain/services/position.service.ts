import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class PositionService {
 private _position = new BehaviorSubject<number>(0);

 constructor() {}

 get position(): Observable<number> {
   return this._position.asObservable();
 }

 setPosition(position: number): void {
   this._position.next(position);
 }
}