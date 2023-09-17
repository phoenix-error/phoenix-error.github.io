import React from 'react';
import WorkItems from './WorkItems';

// import data
import { projectsData } from './Data';

const Projects = () => {
	return (
		<div>
			{/* projects */}
			<div className="work__container container grid">
				{projectsData.map((item) => {
					return <WorkItems item={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
