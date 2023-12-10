import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'carrosel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.scss'
})
export class CarroselComponent {
  @Input() public imageUrl: string = 'assets/img/img-mars.jpg';
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public hasImg: boolean = false;
}
