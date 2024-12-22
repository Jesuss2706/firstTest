import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnChanges, OnInit, OnDestroy{
  colors = ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'violeta'];
  name !: string;
  title = 'super proyecto del megaworld';
  url = 'https://i.pinimg.com/280x280_RS/bb/a9/cb/bba9cb3083bc735565f61c5bdaecb7d9.jpg'

  selectedColor !: string;

  createNewColor(color: any): void {
    console.log('color ->', color);

    this.colors.push(color);
  }

  onColorClicked(color: string): void {
    this.selectedColor = color;
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('changes ->', changes);
  }

  ngOnInit(): void {
      console.log('OnInit');
  }

  ngOnDestroy(): void {
      console.log('OnDestroy');
  }

  clearSelected(): void {
    this.selectedColor = '';
  }
}
