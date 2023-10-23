import { BackendUrls } from '../backend-urls.js';
import { Repository } from '../global/repository.js';

export class CostsRepository extends Repository {
  constructor() {
    super(new BackendUrls().costs);
  }

  getAll() {
    return super.get();
  }

  create(body) {
    return super.post(body);
  }

  update(id, body) {
    return super.put(id, body);
  }
}
