import { ConnectionService } from './connection.service';
import { IObserver, ISubject } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService implements ISubject {
  private sharedBoard = new Subject<number[][]>();
  public boardState: number[][]
  observers: IObserver[] = [];

  constructor(private connectionService: ConnectionService) { 
    this.connectionService.connection.on("BroadcastBoard", (board) => {
      this.boardState = board;
      this.sharedBoard.next(board);
      this.notify('Subscriber service Subject: Notifying observers...');
    });
  }

  add(observer: IObserver) {
    const isExist = this.observers.includes(observer);
    if(isExist){
      return console.log('Subscriber service Subject: Observer has been attached already.');
    }

    console.log('Subscriber service Subject: Attached an observer.');
    this.observers.push(observer);
  }

  remove(observer: IObserver) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
        return console.log('Subscriber service Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subscriber service Subject: Detached an observer.');
  }

  notify(line? :string) {
    if(line)
    console.log(line);
    for (const observer of this.observers) {
        observer.update(this);
    }
  }

  public retrieveMapperBoard(): Observable<number[][]> {
    return this.sharedBoard.asObservable();
  }
}
