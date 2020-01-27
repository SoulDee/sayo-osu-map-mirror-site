import { Component, OnInit, Inject } from '@angular/core';
import { UpdatedLogService } from '@app/shared/service/UpdateLog';

@Component({
    selector: 'app-updated-log',
    templateUrl: './updated-log.component.html',
    styleUrls: ['./updated-log.component.scss']
})
export class UpdatedLogComponent implements OnInit {
    constructor(public updated: UpdatedLogService) {}

    ngOnInit() {
        this.updated.getUpdatedData();
    }
}