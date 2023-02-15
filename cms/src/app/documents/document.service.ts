import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './documents.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private maxDocumentId!: number;

  documentListChangedEvent = new Subject<Document[]>();
  documentSelectedEvent = new EventEmitter<Document>();
  // documentChangedEvent = new EventEmitter<Document[]>();

  private documents: Document[] = [];
  constructor() {
    this.documents = MOCKDOCUMENTS
    this.maxDocumentId = this.getMaxId();

  }


  getDocuments(): Document[] { return this.documents.slice(); }


  getDocument(id: string): Document {
    for (const document of this.documents) {
      if (document.id == id) {
        return document;
      }
    }
    return null!;
  }


  getMaxId(): number {

    let maxId = 1
    let currentId = 0;
    for (const document of this.documents) {
      currentId == parseInt(document.id);
      if (currentId > maxId) {
        maxId = currentId
      }
      console.log('getMaxId is working on Documents')
    }
    return maxId
  }

  deleteDocument(document: Document) {

    if (!document) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.documentListChangedEvent.next(this.documents.slice());
    console.log('deleteDocument is working');
  }

  addDocument(newDocument: Document) {
    if (!newDocument || newDocument == null) {
      return;
    }
    this.maxDocumentId++;
    let newDocIdString = this.maxDocumentId;
    newDocument.id = newDocIdString.toString();
    this.documents.push(newDocument);
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone.slice());
    console.log('addDocument is working');
  }

  updateDocument(originalDocument: Document, newDocument: Document) {

    if (!originalDocument || !newDocument || originalDocument == null || newDocument == null) {
      return;
    }

    let pos = this.documents.indexOf(originalDocument)
    if (pos < 0) {
      return
    }
    newDocument.id = originalDocument.id
    this.documents[pos] = newDocument
    let documentsListClone = this.documents.slice()
    this.documentListChangedEvent.next(documentsListClone.slice())
    console.log('updateDocument is working');
  }


}