import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';
import { List } from './../../models/list';

@Component({
	selector: 'app-view-list',
	templateUrl: './view-list.component.html',
	styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

	constructor(private listService: ListService) { }

	private lists: List[];

	ngOnInit() {
		this.loadLists();
	}

	loadLists() {
		this.listService.getList()
			.subscribe((lists: List[]) => {
				this.lists = lists;
			});
	}

	deleteList(list: List) {
		this.listService.deleteList(list._id)
			.subscribe(response => this.lists = this.lists.filter((lists) => lists !== list))
	}

	updateList(event) {
		this.lists = this.lists.concat(event);
	}

}
