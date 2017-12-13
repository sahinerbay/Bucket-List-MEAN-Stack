import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListService } from './../../services/list.service';
import { List } from './../../models/list';

@Component({
	selector: 'app-add-list',
	templateUrl: './add-list.component.html',
	styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

	constructor(private listService: ListService) { }

	ngOnInit() {
	}

	// Send newly added 'list' to the parent component(view-list)
	@Output() addList: EventEmitter<List> = new EventEmitter<List>();

	onSubmit(listForm: NgForm) {
		this.listService.addList(listForm.value)
			// Returns list: which is a response coming from api end point and value of new added 'list'.
			.subscribe((list:List) => {
				this.addList.emit(list);
			})
	}
}
