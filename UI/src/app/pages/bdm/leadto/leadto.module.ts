import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadtoComponent } from './leadto.component';
import { LeadToRoutingModule } from './leadto-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { ToastyModule } from 'ng2-toasty';
import { LeadToService } from '../../../service/bdm/leadto.service';
import {
  MatTableModule,
  MatPaginatorModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    LeadToRoutingModule,
    SharedModule,
    FormsModule,
    SelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule, MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ToastyModule.forRoot()
  ],
  declarations: [LeadtoComponent],
  providers: [LeadToService]
})
export class LeadToModule { }