import { Slides } from 'ionic-angular';
import { OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { ICalendarComponent, IDisplayEvent, IEvent, ITimeSelected, IRange, IWeekView, IWeekViewRow, IWeekViewDateRow, CalendarMode } from './calendar';
import { CalendarService } from './calendar.service';
export declare class WeekViewComponent implements ICalendarComponent, OnInit, OnChanges {
    private calendarService;
    slider: Slides;
    class: boolean;
    formatWeekTitle: string;
    formatWeekViewDayHeader: string;
    formatHourColumn: string;
    startingDayWeek: number;
    allDayLabel: string;
    hourParts: number;
    eventSource: IEvent[];
    onRangeChanged: EventEmitter<IRange>;
    onEventSelected: EventEmitter<IEvent>;
    onTimeSelected: EventEmitter<ITimeSelected>;
    onTitleChanged: EventEmitter<string>;
    slideOption: {
        runCallbacksOnInit: boolean;
        loop: boolean;
    };
    views: IWeekView[];
    currentViewIndex: number;
    range: IRange;
    direction: number;
    mode: CalendarMode;
    private inited;
    constructor(calendarService: CalendarService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onSlideChanged(): void;
    move(direction: number): void;
    static createDateObjects(startTime: Date): IWeekViewRow[][];
    static getDates(startTime: Date, n: number): IWeekViewDateRow[];
    getViewData(startTime: Date): IWeekView;
    getRange(currentDate: Date): IRange;
    onDataLoaded(): void;
    refreshView(): void;
    getTitle(): string;
    private static getISO8601WeekNumber(date);
    private static compareEventByStartOffset(eventA, eventB);
    select(selectedTime: Date, events: IDisplayEvent[]): void;
    placeEvents(orderedEvents: IDisplayEvent[]): void;
    placeAllDayEvents(orderedEvents: IDisplayEvent[]): void;
    overlap(event1: IDisplayEvent, event2: IDisplayEvent): boolean;
    calculatePosition(events: IDisplayEvent[]): void;
    private static calculateWidth(orderedEvents);
    eventSelected(event: IEvent): void;
}