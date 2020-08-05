import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolutionsProviderService {
  private solutions:any[]=[];
  constructor(private http: HttpClient) { }

  public getSolutions(): any[] {
    return this.solutions;
}

load() {
  return new Promise((resolve, reject) => {
    this.http.get("http://localhost:3000/api").
    subscribe((data:any[]) => {console.log(data);
                             this.solutions=data; 
                             resolve(true);                           
  });
  });
}

}
