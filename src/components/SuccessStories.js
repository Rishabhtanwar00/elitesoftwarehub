import Img1 from '../assets/success1.jpg';
import Img2 from '../assets/success2.jpg';
import Img3 from '../assets/success3.jpg';
import Img4 from '../assets/success.jpg';

const SuccessStories = () => {
	return (
		<section className='success-stories flex-col'>
			<div className='flex success-story-top'>
				<div className='success-stories-title'>
					<img src={Img4} alt='' />
					<h1>Success Stories</h1>
				</div>
				<div
					onClick={() =>
						window.open('https://kraduae.com', '_blank', 'noreferrer')
					}
					className='success-story'
				>
					<img src={Img1} alt='Success Story Img' />
					<span className='flex'>Krad Global General Trading</span>
				</div>
			</div>
			<div className='flex success-story-bottom'>
				<div
					className='success-story'
					onClick={() =>
						window.open('https://twilearn.in', '_blank', 'noreferrer')
					}
				>
					<img src={Img2} alt='Success Story Img' />
					<span className='flex'>Twilearn</span>
				</div>
				<div
					className='success-story'
					onClick={() =>
						window.open('https://primefileadvisors.com', '_blank', 'noreferrer')
					}
				>
					<img src={Img3} alt='Success Story Img' />
					<span className='flex'>Prime File Advisors</span>
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
