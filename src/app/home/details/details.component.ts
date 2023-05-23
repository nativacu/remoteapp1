import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  person: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.person = this.getPersonById(id);
  }

  getPersonById(id: number) {
    const people = [
      { id: 1, name: 'John Doe', role: 'Lead Developer', bio: 'John is an experienced developer...', image: 'https://via.placeholder.com/150x150' },
      { id: 2, name: 'Jane Smith', role: 'Designer', bio: 'Jane is a talented designer...', image: 'https://via.placeholder.com/150x150' },
      { id: 3, name: 'Mark Johnson', role: 'Developer', bio: 'Mark is a skilled developer...', image: 'https://via.placeholder.com/150x150' },
      { id: 4, name: 'Samantha Brown', role: 'Developer', bio: 'Samantha is a passionate developer...', image: 'https://via.placeholder.com/150x150' }
    ];

    return people.find(person => person.id === id);
  };

}
