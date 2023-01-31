import { Component, OnInit } from '@angular/core';
import { Document } from '../documents.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {
  // @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    //  id, name, description and url 
    // new Document('1', 'The Lord of the Rings', 'A fantastic Journey', 'url', 'child'),
    // new Document('2', 'The Book of Mormon', 'Another Testament of Jesus Christ', 'url', 'child'),
    // new Document('3', 'The Bible', 'Old and New Testament', 'url', 'child'),
  ];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onSelectedDocument(document: Document) {
    this.documentService.documentSelectedEvent.emit(document);
    // this.selectedDocumentEvent.emit(document);
  }
}
