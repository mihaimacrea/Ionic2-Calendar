"use strict";
var core_1 = require('@angular/core');
var calendar_service_1 = require('./calendar.service');
(function (Step) {
    Step[Step["QuarterHour"] = 15] = "QuarterHour";
    Step[Step["HalfHour"] = 30] = "HalfHour";
    Step[Step["Hour"] = 60] = "Hour";
})(exports.Step || (exports.Step = {}));
var Step = exports.Step;
var CalendarComponent = (function () {
    function CalendarComponent(calendarService) {
        this.calendarService = calendarService;
        this.eventSource = [];
        this.calendarMode = 'month';
        this.formatDay = 'd';
        this.formatDayHeader = 'EEE';
        this.formatDayTitle = 'MMMM dd, yyyy';
        this.formatWeekTitle = 'MMMM yyyy, Week $n';
        this.formatMonthTitle = 'MMMM yyyy';
        this.formatWeekViewDayHeader = 'EEE d';
        this.formatHourColumn = 'ha';
        this.showEventDetail = true;
        this.startingDayMonth = 0;
        this.startingDayWeek = 0;
        this.allDayLabel = 'all day';
        this.noEventsLabel = 'No Events';
        this.queryMode = 'local';
        this.step = Step.Hour;
        this.onCurrentDateChanged = new core_1.EventEmitter();
        this.onRangeChanged = new core_1.EventEmitter();
        this.onEventSelected = new core_1.EventEmitter();
        this.onTimeSelected = new core_1.EventEmitter();
        this.onTitleChanged = new core_1.EventEmitter();
        this.hourParts = 1;
    }
    Object.defineProperty(CalendarComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (val) {
            this._currentDate = val;
            this.calendarService.currentDate = this.currentDate;
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hourParts = 60 / this.step;
        this.calendarService.queryMode = this.queryMode;
        this.calendarService.currentDateChanged$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;
            _this.onCurrentDateChanged.emit(currentDate);
        });
    };
    CalendarComponent.prototype.rangeChanged = function (range) {
        this.onRangeChanged.emit(range);
    };
    CalendarComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    CalendarComponent.prototype.timeSelected = function (timeSelected) {
        this.onTimeSelected.emit(timeSelected);
    };
    CalendarComponent.prototype.titleChanged = function (title) {
        this.onTitleChanged.emit(title);
    };
    CalendarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'calendar',
                    template: "\n        <div [ngSwitch]=\"calendarMode\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [eventSource]=\"eventSource\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [eventSource]=\"eventSource\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [eventSource]=\"eventSource\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
                    styles: ["\n        :host > div { height: 100%; }\n    "],
                    providers: [calendar_service_1.CalendarService]
                },] },
    ];
    CalendarComponent.ctorParameters = [
        { type: calendar_service_1.CalendarService, },
    ];
    CalendarComponent.propDecorators = {
        'currentDate': [{ type: core_1.Input },],
        'eventSource': [{ type: core_1.Input },],
        'calendarMode': [{ type: core_1.Input },],
        'formatDay': [{ type: core_1.Input },],
        'formatDayHeader': [{ type: core_1.Input },],
        'formatDayTitle': [{ type: core_1.Input },],
        'formatWeekTitle': [{ type: core_1.Input },],
        'formatMonthTitle': [{ type: core_1.Input },],
        'formatWeekViewDayHeader': [{ type: core_1.Input },],
        'formatHourColumn': [{ type: core_1.Input },],
        'showEventDetail': [{ type: core_1.Input },],
        'startingDayMonth': [{ type: core_1.Input },],
        'startingDayWeek': [{ type: core_1.Input },],
        'allDayLabel': [{ type: core_1.Input },],
        'noEventsLabel': [{ type: core_1.Input },],
        'queryMode': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'onCurrentDateChanged': [{ type: core_1.Output },],
        'onRangeChanged': [{ type: core_1.Output },],
        'onEventSelected': [{ type: core_1.Output },],
        'onTimeSelected': [{ type: core_1.Output },],
        'onTitleChanged': [{ type: core_1.Output },],
    };
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.js.map