import { searchDomain } from '@esoft7s/search/domain';
import { sharedDataAccess } from '@esoft7s/shared/data-access';

export function searchDataAccess(): string {
  console.log(searchDomain());
  console.log(sharedDataAccess());
  return 'search-data-access';
}
