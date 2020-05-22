import { AEA, AE, CE, $id, $cs, $qs } from '../../../commonlyUsedComponents/getElement';
import _calendar_view from './_calendar_view';

export default class Calendar {
  private el: HTMLElement;
  private calendar_view : _calendar_view;
  constructor(
    element: HTMLElement
  ){
    this.el = element;
    this.calendar_view = new _calendar_view();
  }
  public init(){
    this.calendar_view.init(this.el);
  }
}