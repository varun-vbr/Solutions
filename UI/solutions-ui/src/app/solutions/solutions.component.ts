import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolutionsProviderService } from '../solutions-provider.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent implements OnInit {
  public solutions: any[]=[];
  constructor(solutionsProvider:SolutionsProviderService) {
      this.solutions=solutionsProvider.getSolutions();
   }

  ngOnInit(): void {
    
  }

}
