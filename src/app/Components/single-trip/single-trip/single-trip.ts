import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { signal, ViewEncapsulation} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-single-trip',
    providers: [provideNativeDateAdapter()],
  imports: [MatTabsModule, MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatDatepickerModule,FormsModule,CdkDrag,CdkDropList],
  templateUrl: './single-trip.html',
  styleUrl: './single-trip.css',
})
export class SingleTrip {
      showMore = false;
    protected tabs = signal(['Inclusions', 'Exclusions']);
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
