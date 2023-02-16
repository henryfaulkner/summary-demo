import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollableWrapperComponent } from './scrollable-wrapper/scrollable-wrapper.component';
import { CustomerPortfolioComponent } from './customer-portfolio/customer-portfolio.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';
import { SecondaryGreenButtonComponent } from './secondary-green-button/secondary-green-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessProfileComponent,
    ScrollableWrapperComponent,
    CustomerPortfolioComponent,
    FinancialDetailsComponent,
    SecondaryGreenButtonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
