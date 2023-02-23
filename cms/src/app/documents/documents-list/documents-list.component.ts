import { Component, OnDestroy, OnInit } from '@angular/core';
import { Document } from '../documents.model';
import { DocumentService } from '../document.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit, OnDestroy {
  // @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    //  id, name, description and url 
    // new Document('1', 'The Lord of the Rings', 'A fantastic Journey', 'url', 'child'),
    // new Document('2', 'The Book of Mormon', 'Another Testament of Jesus Christ', 'url', 'child'),
    // new Document('3', 'The Bible', 'Old and New Testament', 'url', 'child'),
  ];

  private subscription!: Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();

    // this.documentService.documentChangedEvent.subscribe(
    //   (document: Document[]) => {
    //     this.documents = document;
    //   }
    // );

    this.subscription = this.documentService.documentListChangedEvent.subscribe(
      (documentsList: Document[]) => {
        this.documents = documentsList;
      }
    );
  }



  // TO CHANGE THIS WITH REAL DATA
  // this function is add a new document using hard coded details
  onAdd() {

    // fake add document 
    // let testDocument = new Document(this.documentService.getMaxId().toString(), 'The Book of Mormon', 'Another Testament of Jesus Christ', 'https://www.churchofjesuschrist.org/study/scriptures/bofm?lang=eng', 'child')
    // this.documentService.addDocument(testDocument);

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
