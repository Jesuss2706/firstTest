import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent{
  @Input() className = 'btn-primary';
  @Input() label !: string;

  @Output() newItem = new EventEmitter<string>();

  addNewColor(item: string): void {
    this.newItem.emit(item);
  }
}
