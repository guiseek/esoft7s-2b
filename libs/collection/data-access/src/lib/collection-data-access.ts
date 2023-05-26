import { collectionDomain } from '@esoft7s/collection/domain';
import { sharedDataAccess } from '@esoft7s/shared/data-access';

export function collectionDataAccess(): string {
  console.log(collectionDomain());
  console.log(sharedDataAccess());
  return 'collection-data-access';
}
