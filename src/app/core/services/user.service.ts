import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _id!: string;
  private _firstName!: string;
  private _lastName!: string;
  private _department!: string;
  private _job!: string;
  //seperate those into other object in iteration 2
  private _imagePath!: string;
  private _reportingTo!: string;
  private _corporateLevel!: number;
  private _lifeTime!: number;
  private _vacationDaysLeft!: number;
  private _sickDaysLeft!: number;
  //seperate those into other object in iteration 2
  private _vacationRequestNumber!: number;
  private _leaveRequestNumber!: number;

  constructor() {
    this._id = 'U12345';
    this._firstName = 'John';
    this._lastName = 'Doe';
    this._department = 'IT';
    this._job = 'Software Engineer';
    this._imagePath = 'https://randomuser.me/api/portraits/men/31.jpg';
    this._reportingTo = 'Jane Smith';
    this._corporateLevel = 10;
    this._lifeTime = 35;
    this._vacationDaysLeft = 15;
    this._sickDaysLeft = 5;
    this._vacationRequestNumber = 10;
    this._leaveRequestNumber = 10;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
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

  get department(): string {
    return this._department;
  }

  set department(value: string) {
    this._department = value;
  }

  get job(): string {
    return this._job;
  }

  set job(value: string) {
    this._job = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }

  get reportingTo(): string {
    return this._reportingTo;
  }

  set reportingTo(value: string) {
    this._reportingTo = value;
  }

  get corporateLevel(): number {
    return this._corporateLevel;
  }

  set corporateLevel(value: number) {
    this._corporateLevel = value;
  }

  get lifeTime(): number {
    return this._lifeTime;
  }

  set lifeTime(value: number) {
    this._lifeTime = value;
  }

  get vacationDaysLeft(): number {
    return this._vacationDaysLeft;
  }

  set vacationDaysLeft(value: number) {
    this._vacationDaysLeft = value;
  }

  get sickDaysLeft(): number {
    return this._sickDaysLeft;
  }

  set sickDaysLeft(value: number) {
    this._sickDaysLeft = value;
  }

  get vacationRequestNumber(): number {
    return this._vacationRequestNumber;
  }

  set vacationRequestNumber(value: number) {
    this._vacationRequestNumber = value;
  }

  get leaveRequestNumber(): number {
    return this._leaveRequestNumber;
  }

  set leaveRequestNumber(value: number) {
    this._leaveRequestNumber = value;
  }
}
