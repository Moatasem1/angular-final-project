import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

export enum vacationType {
  ANNUAL = 'Annual',
  SICK = 'Sick',
  UNPAID = 'Non-Paid',
}

export class VacationHistory {
  private _id: string;
  private _type: vacationType;
  private _startDate: string;
  private _endDate: string;

  constructor(
    id: string,
    type: vacationType,
    startDate: string,
    endDate: string
  ) {
    this._id = id;
    this._type = type;
    this._startDate = startDate;
    this._endDate = endDate;
  }

  get id(): string {
    return this._id;
  }

  get type(): vacationType {
    return this._type;
  }

  set type(value: vacationType) {
    this._type = value;
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

  getDurationInDays(): number {
    const startDate = new Date(this._startDate);
    const endDate = new Date(this._endDate);
    const duration =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    return Math.ceil(duration);
  }
}

export class PendingRequest {
  private _id: string;
  private _submittedOn: string;
  private _startDate: string;
  private _endDate: string;
  private _currentlyAt: string;

  constructor(
    id: string,
    submittedOn: string,
    startDate: string,
    endDate: string,
    currentlyAt: string
  ) {
    this._id = id;
    this._submittedOn = submittedOn;
    this._startDate = startDate;
    this._endDate = endDate;
    this._currentlyAt = currentlyAt;
  }

  get id(): string {
    return this._id;
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

  get currentlyAt(): string {
    return this._currentlyAt;
  }

  set currentlyAt(value: string) {
    this._currentlyAt = value;
  }

  get duration(): number {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    return endDate.getDate() - startDate.getDate();
  }
}
