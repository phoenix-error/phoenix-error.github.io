import React from 'react';
import './Blog.css';

const BlogCard = ({ item }) => {
	return (
		<div className="blog__card" key={item.id}>
			<img src={item.thumbnail} alt="" className="blog__img" />

			<a
				href={item.url}
				className="blog__button"
				target="_blank"
				rel="noreferrer"
			>
				<h3 className="blog__title blog__button-icon">{item.title}</h3>
			</a>

			<p className="blog__description">{item.description}</p>
		</div>
	);
};

export default BlogCard;
