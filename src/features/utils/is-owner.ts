import { User as AuthUser } from 'lucia';

type Entity = {
  userId: string | null;
};

export const isOwner = (
  authUser: AuthUser | null | undefined,
  entinty: Entity | null | undefined,
) => {
  if (!authUser || !entinty) {
    return false;
  }

  if (!entinty.userId) {
    return false;
  }

  if (entinty.userId !== authUser.id) {
    return false;
  } else {
    return true;
  }
};
