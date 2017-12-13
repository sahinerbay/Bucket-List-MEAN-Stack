export interface List {
	_id?: string; //Optional, since we let mongoDB deal with _id and we don't give any _id value when adding a list in a form.
	title: string;
	description: string;
	category: string;
}

