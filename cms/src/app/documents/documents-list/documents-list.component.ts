import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../documents.model';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    //  id, name, description and url 
    new Document('1', 'The Lord of the Rings', 'A fantastic Journey', 'url', 'child'),
    new Document('2', 'The Lord of the Rings', 'A fantastic Journey', 'url', 'child')
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
