import { AnimalExperiences, Header, Item } from './../../core/model/data-travel.interface';
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
  sectionData: AnimalExperiences = {} as AnimalExperiences;
  curLabel: string = '';
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.curLabel = param.get('label')!;
      this.sectionData =
        this.dataService.data[0][this.curLabel as keyof (typeof this.dataService.data)[0]];
      console.log(this.sectionData);
    });
  }
}
