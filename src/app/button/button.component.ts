import { Component, OnInit ,EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <div>
  <h2 style="text-align:center">Mindbowser | Angular Elements</h2>
  <form style="margin-left: 410px;">
  <label>Name</label>
  <input type= "text" name = "Name"[(ngModel)] = "Name">
  <label>Email</label>
  <input type= "text" name= "Email"[(ngModel)] = "Email">
  <button (click)="handleClick($event)">{{ label }}</button>
  </form>
  </div>
`,
  styles: ['input[type=text], select {width: 50%;padding: 12px 20px;margin: 8px 0;display: flex;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;}button {width: 50%;background-color: #24a0ed;color: white;padding: 14px 20px;margin: 8px 0;border: none;border-radius: 4px;cursor: pointer;}button:hover {background-color: #24a0ed;}div {border-radius: 5px;background-color: #f2f2f2;padding: 20px;}'],
  
})
export class ButtonComponent implements OnChanges {

  @Input() label = '';
  @Output() action = new EventEmitter<String>();
  Name = '';
  Email = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
  }

  handleClick(event: any) {
      let details = `{Name: ${this.Name}, Email: ${this.Email}}`
      this.action.emit(details);
  }
}
