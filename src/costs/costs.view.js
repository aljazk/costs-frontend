import { Button } from '../global/displays/button.js';
import { Form } from '../global/displays/form.js';
import { Table } from '../global/displays/table.js';
import { CostsRepository } from './cost.repository.js';
import { CostsDataFormatter } from './costs-data-formatter.js';
import { CostsForm } from './costs-form.js';

export class CostsView {
  constructor() {
    this.costsRepository = new CostsRepository();
    this.buttonText = 'Add cost';
    this.button = new Button('Add cost', document.body);
    this.table = new Table(document.body);
    this.form = new CostsForm(document.body);
    this.form.onSubmit = (formObject) => {
      this.costsRepository.post(formObject).then(() => {
        this.updateTable();
        this.toggleAddCostsForm();
      });
    };
    this.form.hide();
    this.button.addOnClickEvent(this.onAddCostClick.bind(this));
    this.updateTable();
  }

  onAddCostClick() {
    this.toggleAddCostsForm();
  }

  toggleAddCostsForm() {
    this.table.toggle();
    this.form.toggle();
    if (this.table.isHidden()) {
      this.button.setText('Back');
    } else {
      this.button.setText(this.buttonText);
    }
  }

  updateTable() {
    this.costsRepository.getAll().then((data) => {
      this.table.updateTable(new CostsDataFormatter().formatArray(data));
    });
  }
}
