import React, { useState, useEffect } from 'react';

// import data
import { projectsData } from './Data';

// import components
import WorkItems from './WorkItems';

const Projects = () => {
	const [item, setItem] = useState({ name: 'all' });
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		// get projects based on item
		if (item.name === 'all') {
			setProjects(projectsData);
		} else {
			const newProjects = projectsData.filter((project) => {
				return project.category.toLowerCase() === item.name;
			});
			setProjects(newProjects);
		}
	}, [item]);

	const handleClick = (e, index) => {
		setItem({ name: e.target.textContent.toLowerCase() });
	};

	return (
		<div>
			{/* projects */}
			<div className="work__container container grid">
				{projects.map((item) => {
					return <WorkItems item={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
