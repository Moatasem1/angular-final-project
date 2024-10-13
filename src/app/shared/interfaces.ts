import { DatePipe } from '@angular/common';
import { inject } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface UserDetails {
  icon: IconProp;
  label: string;
  value: number | string;
  prefix: string;
  suffix: string;
}

export interface ICardsPanelHeader {
  icon: IconProp;
  name: string;
  withSearch: boolean;
}

export interface IVacationRequests {
  id: string;
  firstName: string;
  lastName: string;
  imagePath: string;
  submittedOn: string;
  startDate: string;
  endDate: string;
  salary: number;
}

export interface IVacationRequests {
  id: string;
  firstName: string;
  lastName: string;
  imagePath: string;
  submittedOn: string;
  startDate: string;
  endDate: string;
  salary: number;
}

export class VacationRequests implements IVacationRequests {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _imagePath: string;
  private _submittedOn: string;
  private _startDate: string;
  private _endDate: string;
  private _salary: number;

  constructor(data: IVacationRequests) {
    this._id = data.id;
    this._firstName = data.firstName;
    this._lastName = data.lastName;
    this._imagePath = data.imagePath;
    this._submittedOn = data.submittedOn;
    this._startDate = data.startDate;
    this._endDate = data.endDate;
    this._salary = data.salary;
  }

  get id(): string {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }

  get submittedOn(): string {
    return this._submittedOn;
  }

  set submittedOn(value: string) {
    this._submittedOn = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  get duration() {
    const datePipe = new DatePipe('en-US');
    const stardDateFromated = datePipe.transform(this.startDate, 'dd/MM/yyyy');
    const endDateFromated = datePipe.transform(this.endDate, 'dd/MM/yyyy');

    const diff: number = Math.ceil(
      (this.getEndDate().getTime() - this.getStartDate().getTime()) /
        (1000 * 60 * 60 * 24)
    );

    return `${diff} days (${stardDateFromated} - ${endDateFromated})`;
  }

  getSubmittedOnDate(): Date {
    return new Date(this._submittedOn);
  }

  getStartDate(): Date {
    return new Date(this._startDate);
  }

  getEndDate(): Date {
    return new Date(this._endDate);
  }
}
