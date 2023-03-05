import { useState } from 'react';
import data from './data.json';
import './main.css';
export default function App() {
	const [items] = useState(data);
	return (
		<div className='App'>
			<section className='card'>
				<div className='card__header'>
					<h3>Your Result</h3>
					<div className='card__circle'>
						<p className='card__score'>
							<span>76</span> of 100
						</p>
					</div>

					<h2 className='card__result'>Great</h2>
					<p className='card__description'>
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</div>

				<div className='card__summary'>
					<h3>Summary</h3>
					{items.map((item, i) => {
						return (
							<div
								key={i}
								className='card__summary__item'
								style={{
									backgroundColor: `${item.color}15`,
								}}
							>
								<h4
									className='card__summary__cat'
									style={{
										color: item.color,
									}}
								>
									<img src={item.icon} alt={item.category}></img>
									{item.category}
								</h4>
								<p>
									<span>{item.score} </span> / 100
								</p>
							</div>
						);
					})}
					<button className='card__summary__btn'>Continue</button>
				</div>
			</section>
			<div className='attribution'>
				Challenge by
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
					rel='noreferrer'
				>
					Frontend Mentor
				</a>
				. Coded by <a href='https://github.com/avenjd'>aven</a>.
			</div>
		</div>
	);
}
