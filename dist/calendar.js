"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], CalendarComponent.prototype, "currentDate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CalendarComponent.prototype, "eventSource", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "calendarMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "formatDay", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "formatDayHeader", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "formatDayTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "formatWeekTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "formatMonthTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "formatWeekViewDayHeader", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "formatHourColumn", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CalendarComponent.prototype, "showEventDetail", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CalendarComponent.prototype, "startingDayMonth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CalendarComponent.prototype, "startingDayWeek", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "allDayLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "noEventsLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "queryMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CalendarComponent.prototype, "step", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CalendarComponent.prototype, "onCurrentDateChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CalendarComponent.prototype, "onRangeChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CalendarComponent.prototype, "onEventSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CalendarComponent.prototype, "onTimeSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CalendarComponent.prototype, "onTitleChanged", void 0);
    CalendarComponent = __decorate([
        core_1.Component({
            selector: 'calendar',
            template: "\n        <div [ngSwitch]=\"calendarMode\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [eventSource]=\"eventSource\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [eventSource]=\"eventSource\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [eventSource]=\"eventSource\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
            styles: ["\n        :host > div { height: 100%; }\n    "],
            providers: [calendar_service_1.CalendarService]
        }), 
        __metadata('design:paramtypes', [calendar_service_1.CalendarService])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.js.map