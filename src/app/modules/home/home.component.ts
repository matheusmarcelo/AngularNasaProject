import { HomeService } from './../../services/home/home.service';
import { CoreModule } from './../../core/core.module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Swiper } from 'swiper';
import 'swiper/css';

// Shared
import { CarroselComponent } from '../../shared/carrosel/carrosel.component';
import { HttpClientModule } from '@angular/common/http';

interface Noticias {
  title: string,
  description: string,
  img: string,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CoreModule, CarroselComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public notices: any = [];

  constructor(private homeService: HomeService) { }

  public async ngOnInit(): Promise<Noticias> {
    this.homeService.getNoticeAstronomy().subscribe({
      next: async (res: any) => {
        this.notices = await res.articles
        console.log(res);
      },
      error: (err: Error) => console.log(err),
    });

    return this.notices;
  }
}
