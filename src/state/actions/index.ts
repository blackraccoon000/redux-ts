import { ActionType } from '../action-types';

type SearchRepositoriesAction = {
  type: ActionType.SEARCH_REPOSITORIES;
};

type SearchRepositoriesSuccessAction = {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
};

type SearchRepositoriesErrorAction = {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
};

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
