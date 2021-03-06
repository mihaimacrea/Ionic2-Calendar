import { EventEmitter, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';
export interface IEvent {
    allDay: boolean;
    endTime: Date;
    startTime: Date;
    title: string;
}
export interface IRange {
    startTime: Date;
    endTime: Date;
}
export interface IView {
}
export interface IDayView extends IView {
    allDayEvents: IDisplayAllDayEvent[];
    rows: IDayViewRow[];
}
export interface IDayViewRow {
    events: IDisplayEvent[];
    time: Date;
}
export interface IMonthView extends IView {
    dates: IMonthViewRow[];
}
export interface IMonthViewRow {
    current?: boolean;
    date: Date;
    events: IEvent[];
    hasEvent?: boolean;
    label: string;
    secondary: boolean;
    selected?: boolean;
}
export interface IWeekView extends IView {
    dates: IWeekViewDateRow[];
    rows: IWeekViewRow[][];
}
export interface IWeekViewDateRow {
    date: Date;
    events: IDisplayEvent[];
}
export interface IWeekViewRow {
    events: IDisplayEvent[];
    time: Date;
}
export interface IDisplayEvent {
    endIndex: number;
    endOffset?: number;
    event: IEvent;
    startIndex: number;
    startOffset?: number;
    overlapNumber?: number;
    position?: number;
}
export interface IDisplayAllDayEvent {
    event: IEvent;
}
export interface ICalendarComponent {
    currentViewIndex: number;
    direction: number;
    eventSource: IEvent[];
    getRange: {
        (date: Date): IRange;
    };
    getViewData: {
        (date: Date): IView;
    };
    mode: CalendarMode;
    range: IRange;
    views: IView[];
    onDataLoaded: {
        (): void;
    };
    onRangeChanged: EventEmitter<IRange>;
}
export interface ITimeSelected {
    events: IEvent[];
    selectedTime: Date;
}
export declare type CalendarMode = 'day' | 'month' | 'week';
export declare type QueryMode = 'local' | 'remote';
export declare enum Step {
    QuarterHour = 15,
    HalfHour = 30,
    Hour = 60,
}
export declare class CalendarComponent implements OnInit {
    private calendarService;
    currentDate: Date;
    eventSource: IEvent[];
    calendarMode: CalendarMode;
    formatDay: string;
    formatDayHeader: string;
    formatDayTitle: string;
    formatWeekTitle: string;
    formatMonthTitle: string;
    formatWeekViewDayHeader: string;
    formatHourColumn: string;
    showEventDetail: boolean;
    startingDayMonth: number;
    startingDayWeek: number;
    allDayLabel: string;
    noEventsLabel: string;
    queryMode: QueryMode;
    step: Step;
    onCurrentDateChanged: EventEmitter<Date>;
    onRangeChanged: EventEmitter<IRange>;
    onEventSelected: EventEmitter<IEvent>;
    onTimeSelected: EventEmitter<ITimeSelected>;
    onTitleChanged: EventEmitter<string>;
    private _currentDate;
    private hourParts;
    constructor(calendarService: CalendarService);
    ngOnInit(): void;
    rangeChanged(range: IRange): void;
    eventSelected(event: IEvent): void;
    timeSelected(timeSelected: ITimeSelected): void;
    titleChanged(title: string): void;
}
