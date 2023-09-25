import { ILauderGroup } from "./lauderGroups";

export interface ILauderLesson {
  id: string;
  group: ILauderGroup;
  date: Date;
  startTime: Date;
  endTime: Date;
  hourPrice: number;
}
