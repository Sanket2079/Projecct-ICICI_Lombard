import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface FooterLink {
  label: string;
  href: string;
}
 
interface FooterColumn {
  title: string;
  links: FooterLink[];
}



@Component({
  selector: 'app-footer-comp',
  imports: [CommonModule],
  templateUrl: './footer-comp.html',
  styleUrl: './footer-comp.css',
})
export class FooterComp {
   readonly companyName = 'ICICI Lombard General Insurance Company Limited,';
  readonly address = 'ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025.';
  readonly regNo = 'Reg. No.115';
  readonly email = 'Email-customersupport@icicilombard.com';
  readonly fax = 'Fax no - 022 61961323';
  readonly contact = 'Contact - 1800 2666 (Available 24 x 7)';
 
  readonly socialLinks = [
    { icon: 'facebook', href: '#' },
    { icon: 'instagram', href: '#' },
    { icon: 'twitter', href: '#' },
    { icon: 'youtube', href: '#' },
    { icon: 'linkedin', href: '#' }
  ];
 
  readonly footerColumns: FooterColumn[] = [
    {
      title: 'Products',
      links: [
        { label: 'Motor Insurance', href: '#' },
        { label: 'Car Insurance', href: '#' },
        { label: 'Two Wheeler Insurance', href: '#' },
        { label: 'Health Insurance', href: '#' },
        { label: 'Travel Insurance', href: '#' },
        { label: 'NRI Insurance Services', href: '#' },
        { label: 'Business Insurance', href: '#' },
        { label: 'Crop Insurance', href: '#' },
        { label: 'Cyber Insurance', href: '#' },
        { label: 'ICICI Bharat Griha Raksha Policy', href: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Customer Support', href: '#' },
        { label: 'Citizen Charter', href: '#' },
        { label: 'Retrieve Quote', href: '#' },
        { label: 'Unclaimed Amount', href: '#' },
        { label: 'Intimate PA claim', href: '#' },
        { label: 'Renew Your Policy', href: '#' },
        { label: 'Portability', href: '#' },
        { label: 'EIA', href: '#' },
        { label: 'Online Dispute Resolution Portal for Investors', href: '#' },
        { label: 'SME Endorsements', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Insure App Privacy Policy', href: '#' },
        { label: 'Product Withdrawal', href: '#' },
        { label: 'Do Not Call Registry', href: '#' },
        { label: 'General Terms & Conditions', href: '#' },
        { label: 'Disclaimer', href: '#' },
        { label: 'Insurance Ombudsman', href: '#' },
        { label: 'Stewardship Policy', href: '#' },
        { label: 'Disclosure under Stewardship Policy', href: '#' },
        { label: "Policy for Policyholder's Interest Protection & Grievance Redressal", href: '#' },
        { label: 'Advisory to Customer and Channel Partners', href: '#' },
        { label: 'ICICI Lombard Product List', href: '#' },
        { label: 'GRO Details of Active Branches', href: '#' },
        { label: 'Motor Third Party claims - Statewise nodal officer details', href: '#' },
        { label: 'Whistle Blower Policy', href: '#' }
      ]
    },
    {
      title: 'About Us',
      links: [
        { label: 'Overview', href: '#' },
        { label: 'Promoters', href: '#' },
        { label: 'CSR', href: '#' },
        { label: 'Risk Management', href: '#' },
        { label: 'Public Disclosures', href: '#' },
        { label: 'Investor Relations', href: '#' },
        { label: 'Media', href: '#' }
      ]
    },
    {
      title: 'Others',
      links: [
        { label: "Agents' Portal", href: '#' },
        { label: 'Corporate Login', href: '#' },
        { label: 'Blacklisted Agents', href: '#' },
        { label: 'BAGI Blacklisted Agents', href: '#' },
        { label: 'Distribution Channels', href: '#' },
        { label: 'Pradhan Mantri Suraksha Bima Yojna', href: '#' },
        { label: 'Hospital Empanelment Criteria', href: '#' },
        { label: 'Account Aggregator', href: '#' },
        { label: 'International Business (IIO)', href: '#' },
        { label: 'Sitemap', href: '#' },
        { label: 'Become an Agent (SME)', href: '#' },
        { label: 'Data on Health Claim Service Indicators', href: '#' },
        { label: 'IRDAI List of Blacklisted Agents', href: '#' }
      ]
    }
  ];
 
  readonly bottomAccordions = [
    { title: 'Info Center' },
    { title: 'Renewal' },
    { title: 'Claim' },
    { title: 'Help' },
    { title: 'Customer Reviews' }
  ];
 
  readonly bottomAccordions2 = [
    { title: 'Car Insurance' },
    { title: 'Two Wheeler Insurance' },
    { title: 'Health Insurance' },
    { title: 'Travel Insurance' },
    { title: 'SME Insurance' }
  ];
 
  readonly disclaimerParagraphs = [
    'ICICI Lombard General Insurance Company Ltd. is one of the leading private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.',
    'ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to Lombard GIC Ltd. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale.'
  ];
 
  readonly cin = 'CIN: L67200MH2000PLC129408';
 
  isColumnOpen: { [key: string]: boolean } = {};
 
  toggleColumn(title: string): void {
    this.isColumnOpen[title] = !this.isColumnOpen[title];
  }
}
