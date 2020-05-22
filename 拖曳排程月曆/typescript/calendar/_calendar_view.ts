import { AEA, AE, CE, $id, $cs, $qs } from '../../../commonlyUsedComponents/getElement';

export default class _calendar_view{
  constructor(){}
  init (el:HTMLElement) {
    let container = CE('div', 'dk_schedule_calendar_container');
    AE(el, container);
  }
  arrowBuild(){

  }
}