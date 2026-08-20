import { Component } from '@angular/core';
import { signal, ViewEncapsulation} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-whatis-travel-insurance',
  imports: [CdkDrag, CdkDropList, MatTabsModule],
  templateUrl: './whatis-travel-insurance.html',
  styleUrl: './whatis-travel-insurance.css',
   encapsulation: ViewEncapsulation.None,
})
export class WhatisTravelInsurance {

    showMore = false;
    protected tabs = signal(['Trip type', 'Travellers', 'Coverage']);
    protected selectedTabIndex = signal(0);

  toggleList() {
    this.showMore = !this.showMore;
  }
  drop(event: CdkDragDrop<string[]>) {
    const prevActive = this.tabs()[this.selectedTabIndex()];
    moveItemInArray(this.tabs(), event.previousIndex, event.currentIndex);
    this.selectedTabIndex.set(this.tabs().indexOf(prevActive));
  }
}




