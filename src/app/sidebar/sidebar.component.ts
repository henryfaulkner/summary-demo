import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
  }

  logoPath = "../../assets/Now_Flower_Logo.png";
  icons = [{
    name: "Home",
    changeSrc: false,
    imagePath: "../../assets/NoBg-Icons/Home(White).png",
    imagePathHover: "../../assets/NoBg-Icons/Home(Green).png"
  },
  {
    name: "Business Profile",
    changeSrc: false,
    imagePath: "../../assets/NoBg-Icons/Business_Profile(White).png",
    imagePathHover: "../../assets/NoBg-Icons/Business_Profile(Green).png"
  },
  {
    name: "Financial Details",
    changeSrc: false,
    imagePath: "../../assets/NoBg-Icons/Financial_Profile(White).png",
    imagePathHover: "../../assets/NoBg-Icons/Financial_Profile(Green).png"
  },
  {
    name: "Customer Portfolio",
    changeSrc: false,
    imagePath: "../../assets/NoBg-Icons/Customer_Portfolio(White).png",
    imagePathHover: "../../assets/NoBg-Icons/Customer_Portfolio(Green).png"
  },
  {
    name: "Documents",
    changeSrc: false,
    imagePath: "../../assets/NoBg-Icons/Documents(White).png",
    imagePathHover: "../../assets/NoBg-Icons/Documents(Green).png"
  }];
}
