import React from 'react';

const Social = () => {
	return (
		<div className="home__social">
			<a
				href="https://medium.com/@phoenix-dev"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-medium-m"></i>
			</a>

			<a
				href="https://github.com/phoenix-error"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-github-alt"></i>
			</a>

			<a
				href="https://twitter.com/Phoenix_dev_"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-twitter"></i>
			</a>
		</div>
	);
};

export default Social;
