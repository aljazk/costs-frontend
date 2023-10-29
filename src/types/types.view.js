import { Anchor } from '../global/displays/buttons/anchor.js';
import { Table } from '../global/displays/table.js';
import { View } from '../global/displays/view.js';
import { TypesDataFormatter } from './types-data-formatter.js';
import { TypesRepository } from './types.repository.js';

export class TypesView extends View {
  constructor(appendTo) {
    super(appendTo);
    this.typesRepository = new TypesRepository();

    new Anchor('Add type', '/types/add', this.container);

    this.table = new Table(this.container);
    this.updateTable();
  }

  updateTable(useDone = true) {
    return new Promise((resolve, reject) => {
      this.typesRepository
        .getAll()
        .then((data) => {
          this.table.updateTable(
            new TypesDataFormatter(
              this.updateTable.bind(this, false)
            ).formatArray(data)
          );
          if (useDone) {
            // TODO: Make table loadable
            this.done();
          }
          resolve();
        })
        .catch(reject);
    });
  }
}
