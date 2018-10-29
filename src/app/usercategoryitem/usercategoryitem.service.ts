import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserCategoryItemService {

    fetchUserCategoryItems(): Observable<UserCategoryItem[]> {
        const observe = new Observable<UserCategoryItem[]>((observer) => {
            observer.next([
                {
                    key: 1,
                    userKey: 1,
                    categoryItemKey: 1,
                    occurred: new Date(2018, 10, 24)
                },
                {
                    key: 2,
                    userKey: 1,
                    categoryItemKey: 1,
                    occurred: new Date(2018, 10, 25)
                },
            ]);
        });
        return observe;
    }

}