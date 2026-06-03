import { Header, Item } from './../../core/model/data-travel.interface';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/service/data.service';

@Component({
  selector: 'app-experiance',
  imports: [],
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.css',
})
export class ExperianceComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  headerData: Header = {} as Header;
  sectionItems: Item[] = [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      console.log(param.get('label'));
    });
  }
}
