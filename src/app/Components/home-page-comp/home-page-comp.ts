import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface QuoteTab {
  id: string;
  label: string;
  icon: 'car' | 'bike' | 'health' | 'travel' | 'home' | 'sme' | 'corporate' | 'renewal';
  primaryLabel: string;
  primaryPlaceholder: string;
  showNewVehicleLink: boolean;
}
 
interface QuoteForm {
  primaryValue: string;
  mobile: string;
  email: string;
}
 
interface StatItem {
  value: string;
  label: string;
  note: string;
  discoverLinkLabel?: string;
}
 
interface ProductCard {
  name: string;
  icon: QuoteTab['icon'];
  features: string[];
}
 
interface AwardItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-page-comp',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page-comp.html',
  styleUrl: './home-page-comp.css',
})
export class HomePageComp {

   // ---------- Quote widget (tab based mini forms) ----------
  readonly tabs: QuoteTab[] = [
    { id: 'car', label: 'Car', icon: 'car', primaryLabel: 'Car registration no.*', primaryPlaceholder: 'E.G. MH01DF5698', showNewVehicleLink: true },
    { id: 'bike', label: 'Bike', icon: 'bike', primaryLabel: 'Bike registration no.*', primaryPlaceholder: 'E.G. MH01DF5698', showNewVehicleLink: true },
    { id: 'health', label: 'Health', icon: 'health', primaryLabel: 'Full name*', primaryPlaceholder: 'Enter your full name', showNewVehicleLink: false },
    { id: 'travel', label: 'Travel', icon: 'travel', primaryLabel: 'Destination*', primaryPlaceholder: 'Where are you travelling?', showNewVehicleLink: false },
    { id: 'home', label: 'Home', icon: 'home', primaryLabel: 'Pincode*', primaryPlaceholder: 'E.G. 400025', showNewVehicleLink: false },
    { id: 'sme', label: 'SME', icon: 'sme', primaryLabel: 'Business name*', primaryPlaceholder: 'Enter business name', showNewVehicleLink: false },
    { id: 'corporate', label: 'Corporate', icon: 'corporate', primaryLabel: 'Company name*', primaryPlaceholder: 'Enter company name', showNewVehicleLink: false },
    { id: 'renewal', label: 'Renewal', icon: 'renewal', primaryLabel: 'Policy number*', primaryPlaceholder: 'Enter policy number', showNewVehicleLink: false }
  ];
 
  /** currently selected tab id */
  readonly activeTabId = signal<string>('car');
 
  /** derived active tab object */
  readonly activeTab = computed<QuoteTab>(
    () => this.tabs.find(t => t.id === this.activeTabId()) ?? this.tabs[0]
  );
 
  form: QuoteForm = { primaryValue: '', mobile: '', email: '' };
  agreedToTerms = true;
  wantsWhatsappUpdates = true;
 
  selectTab(tabId: string): void {
    if (this.activeTabId() === tabId) {
      return;
    }
    this.activeTabId.set(tabId);
    this.form = { primaryValue: '', mobile: '', email: '' };
  }
 
  getQuote(): void {
    if (!this.form.primaryValue || !this.form.mobile || !this.form.email) {
      return;
    }
    // TODO: wire up to the quote API for the active tab
    console.log('Get quote requested', { tab: this.activeTabId(), ...this.form });
  }
 
  // ---------- Trust stats strip ----------
  readonly stats: StatItem[] = [
    { value: '37.57 Million', label: 'Policies issued', note: 'FY 2024-25', discoverLinkLabel: 'Discover product prices here' },
    { value: '3.2 Million', label: 'Claims processed', note: 'FY 2024-25' },
    { value: '15300+', label: 'Network garages', note: 'As on 1st July 2026' },
    { value: '11000+', label: 'Network hospitals', note: 'As on 17th March 2026' }
  ];
 
  // ---------- Renewal promo card (right of the quote widget) ----------
  readonly renewalPromo = {
    title: 'ICICI Lombard policy expiring soon?',
    ctaLabel: 'Renew online'
  };
 
  /** number of dots in the promo card's carousel indicator, and which one is active */
  readonly promoDots: number[] = Array.from({ length: 10 }, (_, i) => i);
  readonly activePromoDot = 8;
 
  // ---------- "Our products" cards ----------
  readonly products: ProductCard[] = [
    {
      name: 'Car',
      icon: 'car',
      features: [
        'Doorstep cashless repair & claims process',
        'Kms-based plans for low mileage drivers',
        'AI-backed instant claims process'
      ]
    },
    {
      name: 'Bike',
      icon: 'bike',
      features: [
        'Cashless garage network',
        'Option of long-term policies',
        'Service guarantee on repairs'
      ]
    },
    {
      name: 'Health',
      icon: 'health',
      features: [
        'Personalised policies for all budgets & ages',
        'Cashless treatment at any hospital',
        'Coverage for mild sickness to hospitalisation'
      ]
    },
    {
      name: 'Travel',
      icon: 'travel',
      features: [
        'Cashless hospitalisation worldwide',
        'Coverage for missed flights, baggage & passport loss',
        'Instant online policy'
      ]
    }
  ];
 
  // ---------- Awards & recognition ----------
  readonly awards: AwardItem[] = [
    {
      title: 'Voted Domestic General Insurer of the Year - India at Insurance Asia Awards',
      description: 'This recognition highlights our strong customer focus and innovative solutions, which is a testament to the trust our customers place in us.'
    },
    {
      title: 'Received Best Integrated Marketing Campaign of the Year',
      description: 'Our #GameOfLife campaign was recognised at the ET BFSI Exceller Awards 2024 for its effectiveness and innovative approach.'
    }
  ];
 
  readonly testimonial = {
    name: 'Aarti Navelkar',
    rating: 5,
    quote: 'Loved the easy, digital claims process, had to just upload images of my damaged car to register my claim. The claims advisor (Mr. Aakash Dhume) was very friendly and helped me dedicatedly in settling the claim.'
  };
}
