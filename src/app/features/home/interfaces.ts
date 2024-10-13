import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ILeaveRequest {
  icon: IconProp;
  label: string;
  value: number;
}

export interface IlatestNewsSlide {
  imagePath: string;
  title: string;
  desc: string;
}
