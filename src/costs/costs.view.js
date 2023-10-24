import { Anchor } from '../global/displays/anchor.js';
import { Button } from '../global/displays/button.js';
import { Display } from '../global/displays/display.js';
import { Loader } from '../global/displays/loader.js';
import { PageLoader } from '../global/displays/page-loader.js';
import { Table } from '../global/displays/table.js';
import { AddCostForm } from './add-cost-form.js';
import { CostsRepository } from './cost.repository.js';
import { CostsDataFormatter } from './costs-data-formatter.js';
import { EditCostForm } from './edit-cost-form.js';

export class CostsView {
  constructor(appendTo) {
    this.costsRepository = new CostsRepository();

    this.loader = new PageLoader(appendTo);

    this.container = new Display('div');

    this.addCostButton = new Anchor(
      'Add cost',
      'costs/add',
      this.container.element
    );

    this.table = new Table(this.container.element);

    this.updateTable();
  }

  updateTable() {
    this.costsRepository.getAll().then((data) => {
      this.loader.done(this.container.element);
      this.table.updateTable(new CostsDataFormatter().formatArray(data));
    });
  }
}
