import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

    fetchCategories(): Observable<Category[]> {
        const observe = new Observable<Category[]>((observer) => {
            observer.next([
                {
                    key: 1,
                    name: "Health",
                    items: [
                        {
                            key: 1,
                            name: "Gym",
                            points: 1,
                        },
                        {
                            key: 2,
                            name: "Alcohol",
                            points: -1,
                        }
                    ]
                },
                {
                    key: 2,
                    name: "Personal",
                    items: [
                        {
                            key: 3,
                            name: "Television",
                            points: -1
                        },
                        {
                            key: 4,
                            name: "Study",
                            points: 2
                        }
                    ]
                }
            ]);
        });
        return observe;
    }

}