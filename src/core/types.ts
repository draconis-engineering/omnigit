// src/core/types.ts

interface Commit {
	hash: string;
	date: Date;
	message: string;
	author: string;
}

interface Tag {
	name: string;
	date: Date;
	commit: Commit;
}

interface Branch {
	name: string;
	lastCommit: Date;
}

interface PullRequest {
	name: string;
	date: Date;
	author: string;
	merged: boolean;
}

interface Deployment {
	name: string;
	date: Date;
	commit: Commit;
}

interface Repository {
	name: string;
	owner: string;
	lastCommit: Date;
	branches: Branch[];
	tags: Tag[];
	deployments: Deployment[];
	pullRequests: PullRequest[];
}

export type { Repository }
