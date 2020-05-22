import { AEA, AE, CE, $id, $cs, $qs } from '../../commonlyUsedComponents/getElement';
import Calendar from './calendar/calendar';

export class start {
  private el:HTMLElement;
  public data:object = {};
  constructor(
    elementID :string
  ){
    this.el = $id(elementID);
  }
  init(){
    let calendar : Calendar = new Calendar(this.el);
    calendar.init();
  }
}



// window.ScheduleCalendar = ScheduleCalendar;