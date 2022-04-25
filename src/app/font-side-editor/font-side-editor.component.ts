import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-side-editor',
  templateUrl: './font-side-editor.component.html',
  styleUrls: ['./font-side-editor.component.css']
})
export class FontSideEditorComponent implements OnInit {
  fontSize = 14;
  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
  constructor() { }

  ngOnInit() {
  }

}
