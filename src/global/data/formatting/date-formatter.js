export class DateFormatter {
  formatForDisplay(inputDate) {
    const date = new Date(inputDate);
    console.log(date);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  formatForForm(inputDate) {
    const date = new Date(inputDate);
    console.log(date);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
