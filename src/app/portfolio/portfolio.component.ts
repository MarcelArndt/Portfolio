import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { AttributeSearchServiceService } from '../attribute-search-service.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(public ThemeColor:ColorSwapService, public workWithAttributes:AttributeSearchServiceService ){

  }
  ngOnInit(){
    this.workWithAttributes.searchAttribute("fadeIn")
  }
}
