import { OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ICalendarComponent, IEvent, IMonthView, IMonthViewRow, ITimeSelected, IRange, CalendarMode } from './calendar';
import { CalendarService } from './calendar.service';
export declare class MonthViewComponent implements ICalendarComponent, OnInit, OnChanges {
    private calendarService;
    slider: Slides;
    formatDay: string;
    formatDayHeader: string;
    formatMonthTitle: string;
    eventSource: IEvent[];
    startingDayMonth: number;
    showEventDetail: boolean;
    noEventsLabel: string;
    onRangeChanged: EventEmitter<IRange>;
    onEventSelected: EventEmitter<IEvent>;
    onTimeSelected: EventEmitter<ITimeSelected>;
    onTitleChanged: EventEmitter<string>;
    slideOption: {
        runCallbacksOnInit: boolean;
        loop: boolean;
    };
    views: IMonthView[];
    currentViewIndex: number;
    selectedDate: IMonthViewRow;
    range: IRange;
    mode: CalendarMode;
    direction: number;
    private moveOnSelected;
    private inited;
    constructor(calendarService: CalendarService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onSlideChanged(): void;
    move(direction: number): void;
    createDateObject(date: Date, format: string): IMonthViewRow;
    static getDates(startDate: Date, n: number): Date[];
    getViewData(startTime: Date): IMonthView;
    getHighlightClass(date: IMonthViewRow): string;
    getRange(currentDate: Date): IRange;
    onDataLoaded(): void;
    refreshView(): void;
    getTitle(): string;
    private compareEvent(event1, event2);
    select(selectedDate: Date, events: IEvent[]): void;
    slideView(direction: number): void;
    updateCurrentView(currentViewStartDate: Date, view: IMonthView): void;
    eventSelected(event: IEvent): void;
}