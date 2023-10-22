import { Display } from './display.js';

export class Table extends Display {
  constructor(appendTo) {
    super('table', appendTo);
    this.table = this.element;
    this.loadStyle(import.meta.url, 'table.css');
  }

  clearTable() {
    this.removeAllChildNodes(this.table);
  }

  buildHeader(data) {
    var headers = [];
    for (const item of data) {
      for (const key of Object.keys(item)) {
        if (!headers.includes(key)) {
          headers.push(key);
        }
      }
    }
    const tr = document.createElement('tr');
    for (const header of headers) {
      const th = document.createElement('th');
      th.innerHTML = header;
      tr.appendChild(th);
    }
    return tr;
  }

  updateTable(data) {
    if (this.table) {
      this.clearTable();
      this.table.appendChild(this.buildHeader(data));
      for (const item of data) {
        const tr = document.createElement('tr');
        this.table.appendChild(tr);
        for (const [key, value] of Object.entries(item)) {
          const td = document.createElement('td');
          const span = document.createElement('span');
          td.appendChild(span);
          span.innerHTML = JSON.stringify(value, null, 2);
          tr.appendChild(td);
        }
      }
    }
  }
}
