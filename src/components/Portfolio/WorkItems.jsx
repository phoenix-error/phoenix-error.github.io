import React from 'react';

const WorkItems = ({ item }) => {
	return (
		<div className="work__card" key={item.id}>
			<img src={item.image} alt="" className="work__img" />

			<a
				href={item.url}
				className="work__button"
				target="_blank"
				rel="noreferrer"
			>
				<h3 className="work__title work__button-icon">{item.title}</h3>
			</a>

			<p className="work__description">{item.description}</p>
		</div>
	);
};

export default WorkItems;
