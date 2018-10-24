import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Range } from '../model/model';
import { Subject } from 'rxjs';

export const DATE = new InjectionToken<Date>('date');

@Injectable()
export class RangeStoreService {

  rangeUpdate$:Subject<Range> = new Subject<Range> ();

  constructor(
    @Inject(DATE) private _fromDate: Date,
    @Inject(DATE) private _toDate: Date
  ) { }

  get fromDate():Date {
    return this._fromDate;
  }

  get toDate():Date {
    return this._toDate;
  }

  updateRange(fromDate:Date = this._fromDate, toDate:Date = this._toDate) {
    this._fromDate = fromDate;
    this._toDate = toDate;
    this.rangeUpdate$.next({fromDate:this._fromDate, toDate:this._toDate});
  }


}
