import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private firestore: FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestore.getAll().subscribe(projects => {
      this.projects = projects;
    })
  }

}
