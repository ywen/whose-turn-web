import { createSelector } from 'reselect';
import { RootState } from 'store';
import ChoreType from 'commons/ChoreType';
import KidType from 'commons/KidType';
import ChoreKidType from 'commons/ChoreKidType';

const getChoresKids = createSelector(
  (state: RootState) => state.kids,
  (state: RootState) => state.chores,
  (state: RootState) => state.choresKids,
  (kids: KidType[], chores: ChoreType[], choresKids: ChoreKidType[]) => (
    choresKids.map(ck => {
      const kid = kids.find(k => k.id === ck.kidId);
      const chore = chores.find(c => c.id === ck.choreId);
      return ({
        choreId: chore?.id,
        kidId: kid?.id,
        kidName: kid?.name,
        choreName: chore?.name,
      });
    })
  )
);

export default getChoresKids;
