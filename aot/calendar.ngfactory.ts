/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './calendar.service';
import * as import4 from './calendar';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_switch';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from './monthview';
import * as import14 from './monthview.ngfactory';
import * as import15 from './weekview';
import * as import16 from './weekview.ngfactory';
import * as import17 from './dayview';
import * as import18 from './dayview.ngfactory';
var renderType_CalendarComponent_Host:import0.RenderComponentType = (null as any);
class _View_CalendarComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _CalendarService_0_4:import3.CalendarService;
  _CalendarComponent_0_5:import4.CalendarComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_CalendarComponent_Host0,renderType_CalendarComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('calendar',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CalendarComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CalendarService_0_4 = new import3.CalendarService();
    this._CalendarComponent_0_5 = new import4.CalendarComponent(this._CalendarService_0_4);
    this._appEl_0.initComponent(this._CalendarComponent_0_5,[],compView_0);
    compView_0.create(this._CalendarComponent_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.CalendarService) && (0 === requestNodeIndex))) { return this._CalendarService_0_4; }
    if (((token === import4.CalendarComponent) && (0 === requestNodeIndex))) { return this._CalendarComponent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._CalendarComponent_0_5.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_CalendarComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_CalendarComponent_Host === (null as any))) { (renderType_CalendarComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_CalendarComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const CalendarComponentNgFactory:import10.ComponentFactory<import4.CalendarComponent> = new import10.ComponentFactory<import4.CalendarComponent>('calendar',viewFactory_CalendarComponent_Host0,import4.CalendarComponent);
const styles_CalendarComponent:any[] = ['[_nghost-%COMP%]    > div[_ngcontent-%COMP%] { height: 100%; }'];
var renderType_CalendarComponent:import0.RenderComponentType = (null as any);
class _View_CalendarComponent0 extends import1.AppView<import4.CalendarComponent> {
  _text_0:any;
  _el_1:any;
  _NgSwitch_1_3:import11.NgSwitch;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _TemplateRef_3_5:any;
  _NgSwitchCase_3_6:import11.NgSwitchCase;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _TemplateRef_5_5:any;
  _NgSwitchCase_5_6:import11.NgSwitchCase;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgSwitchCase_7_6:import11.NgSwitchCase;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_CalendarComponent0,renderType_CalendarComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._NgSwitch_1_3 = new import11.NgSwitch();
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import2.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import12.TemplateRef_(this._appEl_3,viewFactory_CalendarComponent1);
    this._NgSwitchCase_3_6 = new import11.NgSwitchCase(this._appEl_3.vcRef,this._TemplateRef_3_5,this._NgSwitch_1_3);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_5 = new import2.AppElement(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import12.TemplateRef_(this._appEl_5,viewFactory_CalendarComponent2);
    this._NgSwitchCase_5_6 = new import11.NgSwitchCase(this._appEl_5.vcRef,this._TemplateRef_5_5,this._NgSwitch_1_3);
    this._text_6 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_7 = new import2.AppElement(7,1,this,this._anchor_7);
    this._TemplateRef_7_5 = new import12.TemplateRef_(this._appEl_7,viewFactory_CalendarComponent3);
    this._NgSwitchCase_7_6 = new import11.NgSwitchCase(this._appEl_7.vcRef,this._TemplateRef_7_5,this._NgSwitch_1_3);
    this._text_8 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import11.NgSwitchCase) && (3 === requestNodeIndex))) { return this._NgSwitchCase_3_6; }
    if (((token === import12.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import11.NgSwitchCase) && (5 === requestNodeIndex))) { return this._NgSwitchCase_5_6; }
    if (((token === import12.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import11.NgSwitchCase) && (7 === requestNodeIndex))) { return this._NgSwitchCase_7_6; }
    if (((token === import11.NgSwitch) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._NgSwitch_1_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.calendarMode;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgSwitch_1_3.ngSwitch = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = 'month';
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgSwitchCase_3_6.ngSwitchCase = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = 'week';
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgSwitchCase_5_6.ngSwitchCase = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = 'day';
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgSwitchCase_7_6.ngSwitchCase = currVal_3;
      this._expr_3 = currVal_3;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_CalendarComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import4.CalendarComponent> {
  if ((renderType_CalendarComponent === (null as any))) { (renderType_CalendarComponent = viewUtils.createRenderComponentType('/home/mihai/Projects/ionic/Ionic2-Calendar/src/calendar.ts class CalendarComponent - inline template',0,import9.ViewEncapsulation.Emulated,styles_CalendarComponent,{})); }
  return new _View_CalendarComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_CalendarComponent1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MonthViewComponent_0_4:import13.MonthViewComponent;
  _text_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_CalendarComponent1,renderType_CalendarComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'monthview',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import14.viewFactory_MonthViewComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MonthViewComponent_0_4 = new import13.MonthViewComponent(this.parent.parentInjector.get(import3.CalendarService));
    this._appEl_0.initComponent(this._MonthViewComponent_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n            ',(null as any));
    compView_0.create(this._MonthViewComponent_0_4,[],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'onRangeChanged',this.eventHandler(this._handle_onRangeChanged_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'onEventSelected',this.eventHandler(this._handle_onEventSelected_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'onTimeSelected',this.eventHandler(this._handle_onTimeSelected_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'onTitleChanged',this.eventHandler(this._handle_onTitleChanged_0_3.bind(this)));
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    this._expr_7 = import8.UNINITIALIZED;
    this._expr_8 = import8.UNINITIALIZED;
    this._expr_9 = import8.UNINITIALIZED;
    this._expr_10 = import8.UNINITIALIZED;
    const subscription_0:any = this._MonthViewComponent_0_4.onRangeChanged.subscribe(this.eventHandler(this._handle_onRangeChanged_0_0.bind(this)));
    const subscription_1:any = this._MonthViewComponent_0_4.onEventSelected.subscribe(this.eventHandler(this._handle_onEventSelected_0_1.bind(this)));
    const subscription_2:any = this._MonthViewComponent_0_4.onTimeSelected.subscribe(this.eventHandler(this._handle_onTimeSelected_0_2.bind(this)));
    const subscription_3:any = this._MonthViewComponent_0_4.onTitleChanged.subscribe(this.eventHandler(this._handle_onTitleChanged_0_3.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[
      subscription_0,
      subscription_1,
      subscription_2,
      subscription_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.MonthViewComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MonthViewComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_4:any = this.parent.context.formatDay;
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._MonthViewComponent_0_4.formatDay = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['formatDay'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parent.context.formatDayHeader;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._MonthViewComponent_0_4.formatDayHeader = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['formatDayHeader'] = new import8.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.parent.context.formatMonthTitle;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._MonthViewComponent_0_4.formatMonthTitle = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['formatMonthTitle'] = new import8.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.parent.context.eventSource;
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._MonthViewComponent_0_4.eventSource = currVal_7;
      if ((changes === (null as any))) { (changes = {}); }
      changes['eventSource'] = new import8.SimpleChange(this._expr_7,currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.parent.context.startingDayMonth;
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._MonthViewComponent_0_4.startingDayMonth = currVal_8;
      if ((changes === (null as any))) { (changes = {}); }
      changes['startingDayMonth'] = new import8.SimpleChange(this._expr_8,currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.parent.context.showEventDetail;
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._MonthViewComponent_0_4.showEventDetail = currVal_9;
      if ((changes === (null as any))) { (changes = {}); }
      changes['showEventDetail'] = new import8.SimpleChange(this._expr_9,currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.parent.context.noEventsLabel;
    if (import5.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._MonthViewComponent_0_4.noEventsLabel = currVal_10;
      if ((changes === (null as any))) { (changes = {}); }
      changes['noEventsLabel'] = new import8.SimpleChange(this._expr_10,currVal_10);
      this._expr_10 = currVal_10;
    }
    if ((changes !== (null as any))) { this._MonthViewComponent_0_4.ngOnChanges(changes); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MonthViewComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_onRangeChanged_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.rangeChanged($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onEventSelected_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.eventSelected($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onTimeSelected_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.timeSelected($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onTitleChanged_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.titleChanged($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_CalendarComponent1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_CalendarComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_CalendarComponent2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _WeekViewComponent_0_4:import15.WeekViewComponent;
  _text_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_CalendarComponent2,renderType_CalendarComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'weekview',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import16.viewFactory_WeekViewComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._WeekViewComponent_0_4 = new import15.WeekViewComponent(this.parent.parentInjector.get(import3.CalendarService));
    this._appEl_0.initComponent(this._WeekViewComponent_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n            ',(null as any));
    compView_0.create(this._WeekViewComponent_0_4,[],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'onRangeChanged',this.eventHandler(this._handle_onRangeChanged_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'onEventSelected',this.eventHandler(this._handle_onEventSelected_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'onTimeSelected',this.eventHandler(this._handle_onTimeSelected_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'onTitleChanged',this.eventHandler(this._handle_onTitleChanged_0_3.bind(this)));
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    this._expr_7 = import8.UNINITIALIZED;
    this._expr_8 = import8.UNINITIALIZED;
    this._expr_9 = import8.UNINITIALIZED;
    this._expr_10 = import8.UNINITIALIZED;
    this._expr_11 = import8.UNINITIALIZED;
    const subscription_0:any = this._WeekViewComponent_0_4.onRangeChanged.subscribe(this.eventHandler(this._handle_onRangeChanged_0_0.bind(this)));
    const subscription_1:any = this._WeekViewComponent_0_4.onEventSelected.subscribe(this.eventHandler(this._handle_onEventSelected_0_1.bind(this)));
    const subscription_2:any = this._WeekViewComponent_0_4.onTimeSelected.subscribe(this.eventHandler(this._handle_onTimeSelected_0_2.bind(this)));
    const subscription_3:any = this._WeekViewComponent_0_4.onTitleChanged.subscribe(this.eventHandler(this._handle_onTitleChanged_0_3.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[
      subscription_0,
      subscription_1,
      subscription_2,
      subscription_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.WeekViewComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._WeekViewComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_4:any = this.parent.context.formatWeekTitle;
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._WeekViewComponent_0_4.formatWeekTitle = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['formatWeekTitle'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parent.context.formatWeekViewDayHeader;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._WeekViewComponent_0_4.formatWeekViewDayHeader = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['formatWeekViewDayHeader'] = new import8.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.parent.context.formatHourColumn;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._WeekViewComponent_0_4.formatHourColumn = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['formatHourColumn'] = new import8.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.parent.context.startingDayWeek;
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._WeekViewComponent_0_4.startingDayWeek = currVal_7;
      if ((changes === (null as any))) { (changes = {}); }
      changes['startingDayWeek'] = new import8.SimpleChange(this._expr_7,currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.parent.context.allDayLabel;
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._WeekViewComponent_0_4.allDayLabel = currVal_8;
      if ((changes === (null as any))) { (changes = {}); }
      changes['allDayLabel'] = new import8.SimpleChange(this._expr_8,currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.parent.context.hourParts;
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._WeekViewComponent_0_4.hourParts = currVal_9;
      if ((changes === (null as any))) { (changes = {}); }
      changes['hourParts'] = new import8.SimpleChange(this._expr_9,currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.parent.context.eventSource;
    if (import5.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._WeekViewComponent_0_4.eventSource = currVal_10;
      if ((changes === (null as any))) { (changes = {}); }
      changes['eventSource'] = new import8.SimpleChange(this._expr_10,currVal_10);
      this._expr_10 = currVal_10;
    }
    if ((changes !== (null as any))) { this._WeekViewComponent_0_4.ngOnChanges(changes); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._WeekViewComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_11:any = this._WeekViewComponent_0_4.class;
    if (import5.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_0,'weekview',currVal_11);
      this._expr_11 = currVal_11;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_onRangeChanged_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.rangeChanged($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onEventSelected_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.eventSelected($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onTimeSelected_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.timeSelected($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onTitleChanged_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.titleChanged($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_CalendarComponent2(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_CalendarComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_CalendarComponent3 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _DayViewComponent_0_4:import17.DayViewComponent;
  _text_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_CalendarComponent3,renderType_CalendarComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dayview',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import18.viewFactory_DayViewComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DayViewComponent_0_4 = new import17.DayViewComponent(this.parent.parentInjector.get(import3.CalendarService));
    this._appEl_0.initComponent(this._DayViewComponent_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n            ',(null as any));
    compView_0.create(this._DayViewComponent_0_4,[],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'onRangeChanged',this.eventHandler(this._handle_onRangeChanged_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'onEventSelected',this.eventHandler(this._handle_onEventSelected_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'onTimeSelected',this.eventHandler(this._handle_onTimeSelected_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'onTitleChanged',this.eventHandler(this._handle_onTitleChanged_0_3.bind(this)));
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    this._expr_7 = import8.UNINITIALIZED;
    this._expr_8 = import8.UNINITIALIZED;
    this._expr_9 = import8.UNINITIALIZED;
    const subscription_0:any = this._DayViewComponent_0_4.onRangeChanged.subscribe(this.eventHandler(this._handle_onRangeChanged_0_0.bind(this)));
    const subscription_1:any = this._DayViewComponent_0_4.onEventSelected.subscribe(this.eventHandler(this._handle_onEventSelected_0_1.bind(this)));
    const subscription_2:any = this._DayViewComponent_0_4.onTimeSelected.subscribe(this.eventHandler(this._handle_onTimeSelected_0_2.bind(this)));
    const subscription_3:any = this._DayViewComponent_0_4.onTitleChanged.subscribe(this.eventHandler(this._handle_onTitleChanged_0_3.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[
      subscription_0,
      subscription_1,
      subscription_2,
      subscription_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.DayViewComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DayViewComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_4:any = this.parent.context.formatHourColumn;
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._DayViewComponent_0_4.formatHourColumn = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['formatHourColumn'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parent.context.formatDayTitle;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._DayViewComponent_0_4.formatDayTitle = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['formatDayTitle'] = new import8.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.parent.context.allDayLabel;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._DayViewComponent_0_4.allDayLabel = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['allDayLabel'] = new import8.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.parent.context.hourParts;
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._DayViewComponent_0_4.hourParts = currVal_7;
      if ((changes === (null as any))) { (changes = {}); }
      changes['hourParts'] = new import8.SimpleChange(this._expr_7,currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.parent.context.eventSource;
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._DayViewComponent_0_4.eventSource = currVal_8;
      if ((changes === (null as any))) { (changes = {}); }
      changes['eventSource'] = new import8.SimpleChange(this._expr_8,currVal_8);
      this._expr_8 = currVal_8;
    }
    if ((changes !== (null as any))) { this._DayViewComponent_0_4.ngOnChanges(changes); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._DayViewComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_9:any = this._DayViewComponent_0_4.class;
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_0,'dayview',currVal_9);
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_onRangeChanged_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.rangeChanged($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onEventSelected_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.eventSelected($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onTimeSelected_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.timeSelected($event)) !== false);
    return (true && pd_0);
  }
  private _handle_onTitleChanged_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.titleChanged($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_CalendarComponent3(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_CalendarComponent3(viewUtils,parentInjector,declarationEl);
}