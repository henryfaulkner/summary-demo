import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  logoPath = "../../assets/Now_Flower_Logo.png";
  icons = [{
    name: "Home",
    imagePath: "../../assets/Home.png"
  },
  {
    name: "Business Profile",
    imagePath: "../../assets/business-profile(green-orange).png"
  },
  {
    name: "Financial Details",
    imagePath: "../../assets/financial-details(green).png"
  },
  {
    name: "Customer Portfolio",
    imagePath: "../../assets/customer-portfolio(green).png"
  },
  {
    name: "Documents",
    imagePath: "../../assets/Documents.png"
  }];
}
