import { Injectable } from '@angular/core';

import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';

import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { map, Observable } from 'rxjs';
import { Project } from 'src/app/models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private projectsCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.projectsCollection = collection(this.firestore, 'projects');
  }

  getAll() {
    return collectionData(this.projectsCollection, {
      idField: 'id',
    }) as Observable<Project[]>;
  }

  get(id: string) {
    const project = doc(this.firestore, `project/${id}`);
    return docData(project, { idField: 'id' });
  }

}
