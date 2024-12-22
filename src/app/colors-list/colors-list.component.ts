import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-colors-list',
  template: `
      <ul>
        <li (click)="onColorClicked(color)"
          [ngClass]="{'alert alert-info': color === selectedColor}">
          {{color | titlecase }}
        </li>
      </ul>`,
  styleUrls: ['./colors-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsListComponent{
  @Input() color!: string;
  @Input() selectedColor!: string;
  @Output() colorClickedEvent = new EventEmitter<string>();

  onColorClicked(color: string): void {
    this.colorClickedEvent.emit(color);
  }
}
