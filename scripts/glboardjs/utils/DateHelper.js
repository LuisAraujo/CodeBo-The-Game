export default class DateHelper {
  static dateToString(date, locale = "pt-BR") {
    return this.clearDateString(date.toLocaleString(locale));
  }

  static clearDateString(dateString) {
    return dateString.replace(/,/g, "");
  }
}
