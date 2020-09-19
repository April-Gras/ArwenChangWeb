export default function({ route, redirect }) {
	if (!route.path.endsWith('/'))
		return redirect({
			path: `${route.path}/`,
			query: { ...route.query }
		});
}