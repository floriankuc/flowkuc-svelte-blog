export interface Position {
	title: string;
	time: string;
	bullets: string[];
}

export interface Project {
	name: string;
	description: string;
	topics: string[];
	html_url: string;
}

export interface Repo {
	updated_at: string;
	pushed_at: string;
}

interface Post {
	meta: {
		title: string;
		date: string;
		desc: string;
	};
	path: string;
}
