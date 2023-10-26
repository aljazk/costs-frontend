import { Anchor } from '../global/displays/anchor.js';
import { Table } from '../global/displays/table.js';
import { View } from '../global/displays/view.js';
import { CostsRepository } from './cost.repository.js';
import { CostsDataFormatter } from './costs-data-formatter.js';

export class CostsView extends View {
  constructor(appendTo) {
    super(appendTo);
    this.costsRepository = new CostsRepository();

    new Anchor('Add cost', 'costs/add', this.container);

    this.table = new Table(this.container);

    this.updateTable();
  }

  updateTable() {
    this.costsRepository.getAll().then((data) => {
      this.table.updateTable(new CostsDataFormatter().formatArray(data));
      this.done();
    });
  }
}
