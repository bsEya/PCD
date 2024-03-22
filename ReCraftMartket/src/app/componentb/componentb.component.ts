import { Component , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrl: './componentb.component.css'
})
export class ComponentbComponent {
@Output() onButtonClick: EventEmitter<any> = new EventEmitter();
}
