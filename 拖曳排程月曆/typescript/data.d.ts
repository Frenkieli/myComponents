export { };
declare global {
  type schedule = {
    name: string,
    date: Date,

  }
  interface schedulecalendarData {

  }
  interface Window { 
    ScheduleCalendar: any; 
  }
}