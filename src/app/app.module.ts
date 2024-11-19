import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './common-components/menu-bar/menu-bar.component';
import { HeaderMenuComponent } from './common-components/header-menu/header-menu.component';
import { FooterMenuComponent } from './common-components/footer-menu/footer-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { SoftwareDevelopmentComponent } from './pages/software-development/software-development.component';
import { HostingComponent } from './pages/hosting/hosting.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RealEstateComponent } from './pages/industries/real-estate/real-estate.component';
import { EducationComponent } from './pages/industries/education/education.component';
import { BeautyComponent } from './pages/industries/beauty/beauty.component';
import { ECommerceComponent } from './pages/industries/e-commerce/e-commerce.component';
import { JewelleryComponent } from './pages/industries/jewellery/jewellery.component';
import { HealthcareComponent } from './pages/industries/healthcare/healthcare.component';
import { TourismComponent } from './pages/industries/tourism/tourism.component';
import { FinanceComponent } from './pages/industries/finance/finance.component';
import { FmcgComponent } from './pages/industries/fmcg/fmcg.component';
import { TechStartupComponent } from './pages/industries/tech-startup/tech-startup.component';
import { WebTechnologyComponent } from './pages/web-technology/web-technology.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { CookiePolicyComponent } from './pages/policy/cookie-policy/cookie-policy.component';
import { TermsConditionsComponent } from './pages/policy/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './pages/policy/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeaderMenuComponent,
    FooterMenuComponent,
    HomeComponent,
    AboutComponent,
    DigitalMarketingComponent,
    SoftwareDevelopmentComponent,
    HostingComponent,
    ContactComponent,
    BlogComponent,
    RealEstateComponent,
    EducationComponent,
    BeautyComponent,
    ECommerceComponent,
    JewelleryComponent,
    HealthcareComponent,
    TourismComponent,
    FinanceComponent,
    FmcgComponent,
    TechStartupComponent,
    WebTechnologyComponent,
    WebDevelopmentComponent,
    CookiePolicyComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
