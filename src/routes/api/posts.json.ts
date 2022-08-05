export const GET = async () => {
	const allPostFiles = import.meta.glob('../blog/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: { metadata: { title: string; date: string } } = (await resolver()) as {
				metadata: { title: string; date: string };
			};
			const postPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});

	return {
		body: sortedPosts
	};
};
