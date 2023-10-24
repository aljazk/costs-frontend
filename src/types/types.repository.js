import { BackendUrls } from '../backend-urls.js';
import { Repository } from '../global/repository.js';

export class TypesRepository extends Repository {
  constructor() {
    super(new BackendUrls().types);
  }

  getAll() {
    return super.get();
  }
  get(id) {
    return super.get('/' + id);
  }
}
