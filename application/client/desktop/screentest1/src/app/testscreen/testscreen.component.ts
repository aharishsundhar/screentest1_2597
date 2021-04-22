import { Component, OnInit } from '@angular/core';
import { TestscreenService } from './testscreen.service';

@Component({
  selector: 'app-testscreen',
  templateUrl: './testscreen.component.html',
  styleUrls: ['./testscreen.component.scss'],
})

export class TestscreenComponent implements OnInit {
    public users = {
        firstname: '',
        lastname: '',
    }

    constructor (
        private testscreenService: TestscreenService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.testscreenService.GpCreate(this.users).subscribe(data => {
            this.users.firstname = ''
 	 	this.users.lastname = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}