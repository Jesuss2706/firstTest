import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color}">{{label}}</button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges,OnInit, OnDestroy {
  @Input() color!: string;
  @Input() label!: string;
  @Input() selectedColor!: string;


  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes ->', changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  constructor() {
    console.log('constructor');
  }
}
