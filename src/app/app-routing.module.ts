import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { SoftwareDevelopmentComponent } from './pages/software-development/software-development.component';
import { HostingComponent } from './pages/hosting/hosting.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'digitalMerketing', component: DigitalMarketingComponent },
  { path: 'softwareDevelopment', component: SoftwareDevelopmentComponent },
  { path: 'hosting', component: HostingComponent },
  { path: 'web-technology', component: WebTechnologyComponent },
  { path: 'web-development', component: WebDevelopmentComponent },

  // industries routing
  { path: 'real-estate', component: RealEstateComponent },
  { path: 'education', component: EducationComponent },
  { path: 'beauty&wellness', component: BeautyComponent },
  { path: 'e-commerce', component: ECommerceComponent },
  { path: 'jewellery', component: JewelleryComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'tourism&hospitality', component: TourismComponent },
  { path: 'finance&fintech', component: FinanceComponent },
  { path: 'FMCG', component: FmcgComponent },
  { path: 'tech-startup', component: TechStartupComponent },

  { path: 'blog', component: BlogComponent },
  { path: 'contactUs', component: ContactComponent },

  { path: 'cookie&policy', component: CookiePolicyComponent },
  { path: 'privacy&policy', component: PrivacyPolicyComponent },
  { path: 'terms&conditions', component: TermsConditionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
