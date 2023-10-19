import service from './TheCat.service';
import {Cat, Vote, VoteResponse} from '../utils/types';

const listCats = (page: number, limit: number): Promise<Array<Cat>> =>
  new Promise<Array<Cat>>((resolve, reject) => {
    service
      .get<Array<Cat>>('/breeds', {
        params: {
          page,
          limit,
        },
      })
      .then(response => {
        resolve(response.data);
        console.log('calling the page', page);
      })
      .catch((error: any) => {
        console.log('calling the page error ', JSON.stringify(error));
        reject(error);
      });
  });

const vote = (vote: Vote): Promise<VoteResponse> =>
  new Promise<VoteResponse>((resolve, reject) => {
    service
      .post<VoteResponse>('/votes', vote)
      .then(response => {
        resolve(response.data);
      })
      .catch((error: any) => reject(error));
  });
export {listCats, vote};
