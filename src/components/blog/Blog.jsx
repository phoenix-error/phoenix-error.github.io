import BlogCard from './BlogCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Blog = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get('https://v1.nocodeapi.com/phoenixdev/medium/FwGSoaSBCUIoEkDK')
			.then(
				(response) => {
					setIsLoaded(true);
					console.log(response.data);

					let posts = response.data.slice(0, 3).map((item) => {
						const title = item.title;
						const thumbnail = item.description.match(/src="([^"]+)"/)[1]; // Extract the URL from the "src" attribute in the "description" field
						const firstHrefMatch = item.description.match(/href="([^"]+)"/); // Extract the URL from the first "href" attribute in the "description" field
						const url = firstHrefMatch ? firstHrefMatch[1] : null; // Rename the extracted URL to "url" and check if a match was found
						return { title, thumbnail, url };
					});
					console.log(posts);
					setPosts(posts);
				},
				(error) => {
					console.log(error);
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	return (
		<section className="blog section" id="blog">
			<h2 className="section__title">My Blog</h2>
			<span class="section__subtitle">Posted on Medium</span>
			<div>
				<div className="blog__container container grid">
					{posts.map((item) => {
						if (error) {
							return <div>Error: {error.message}</div>;
						} else if (!isLoaded) {
							return <div>Loading...</div>;
						} else {
							return <BlogCard item={item} key={item.id} />;
						}
					})}
				</div>
			</div>
		</section>
	);
};

export default Blog;
