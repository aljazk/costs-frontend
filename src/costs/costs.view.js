import { Button } from '../global/displays/button.js';
import { Table } from '../global/displays/table.js';
import { AddCostForm } from './add-cost-form.js';
import { CostsRepository } from './cost.repository.js';
import { CostsDataFormatter } from './costs-data-formatter.js';
import { EditCostForm } from './edit-cost-form.js';

export class CostsView {
  constructor() {
    this.costsRepository = new CostsRepository();

    this.addCostButton = new Button('Add cost', document.body);

    this.table = new Table(document.body);

    this.addCostForm = new AddCostForm(document.body, () => {
      this.updateTable();
      this.closeAddCostForm();
    });
    this.addCostForm.hide();

    this.editCostForm = new EditCostForm(document.body, () => {
      this.updateTable();
      this.closeEditCostForm();
    });
    this.editCostForm.hide();

    this.addCostButton.addOnClickEvent(this.openAddCostForm.bind(this));
    this.updateTable();
  }

  onAddCostClick() {
    this.toggleAddCostsForm();
  }

  openAddCostForm() {
    this.table.hide();
    this.addCostButton.hide();
    this.addCostForm.show();
  }

  closeAddCostForm() {
    this.table.show();
    this.addCostButton.show();
    this.addCostForm.hide();
  }

  openEditCostForm(formObject) {
    this.table.hide();
    this.addCostButton.hide();
    this.editCostForm.show();
    this.editCostForm.setId(formObject.id);
    this.editCostForm.fillForm(formObject);
  }

  closeEditCostForm() {
    this.table.show();
    this.addCostButton.show();
    this.editCostForm.hide();
  }

  updateTable() {
    this.costsRepository.getAll().then((data) => {
      this.table.updateTable(
        new CostsDataFormatter(this.openEditCostForm.bind(this)).formatArray(
          data
        )
      );
    });
  }
}
