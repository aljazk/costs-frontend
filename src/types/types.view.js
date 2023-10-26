import { Anchor } from '../global/displays/anchor.js';
import { Table } from '../global/displays/table.js';
import { View } from '../global/displays/view.js';
import { TypesRepository } from './types.repository.js';

export class TypesView extends View {
  constructor(appendTo) {
    super(appendTo);
    this.typesRepository = new TypesRepository();

    this.table = new Table(this.container);
    this.updateTable();
  }

  updateTable() {
    this.typesRepository.getAll().then((data) => {
      this.table.updateTable(data);
      this.done();
    });
  }
}
