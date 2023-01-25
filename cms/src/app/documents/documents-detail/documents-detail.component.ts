import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../documents.model';

@Component({
  selector: 'app-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.css']
})
export class DocumentsDetailComponent implements OnInit {
  @Input() document!: Document;

  constructor() { }

  ngOnInit() {
  }
}
