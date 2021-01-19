import React from 'react';
import './Mavzu.css';
import mosque from '././assets/mosque.jpg';

export default function Mavzu() {
	return(
		<div className="mavzu">
			<h2 className="text-ceter">Mavzu tanlash</h2>
			<div className="cards">
				<div className="row">
					<div className="cards_item col-xl-6 text-center">
						<div className="img_block">
							<img alt="mosque_theme" src={mosque} className="w-100" />
						</div>
						<p>The Mosque</p>
					</div>
				</div>
			</div>
		</div>
	)
}