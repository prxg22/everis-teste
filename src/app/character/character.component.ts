import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { Char } from '../interfaces'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.styl'],
  host: {
    '(document:keydown)': 'onKeyDown($event)',
  }
})
export class CharacterComponent implements OnInit {
  @Input() char: Char
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>()
  @ViewChild('modal') modal: ElementRef

  constructor(private rd: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.modal.nativeElement.focus()
  }

  onKeyDown($event: KeyboardEvent) {
    if ($event.keyCode === 27) this.close()
  }

  close() {
    this.onClose.emit()
    this.char = null
  }
}
