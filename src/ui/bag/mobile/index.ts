import config from '../../../core/config';
import './css/style.less';

class BagMobilePlugin {
	bagOuterElem: HTMLElement;

	bagInnerElem: HTMLElement;

	bagItemsElem: HTMLElement[];

	constructor(bagOuterElem: HTMLElement) {
		this.bagInnerElem = document.createElement('div');
		this.bagInnerElem.classList.add('mobile');
		this.bagOuterElem = bagOuterElem;
		[...this.bagOuterElem.children].forEach(d => d.className !== 'bag-box' && d.remove());
		this.bagOuterElem.appendChild(this.bagInnerElem);
	}

	place() {
		this.bagItemsElem = [...this.bagInnerElem.children] as HTMLElement[];
		this.bagItemsElem.forEach((d, i) => {
			d.style.transform = `rotateZ(${i * config.bag.mobile.rotateDegree}deg) translateX(-${config.bag.mobile.radius}px)`;
		});
	}

	listen() {
		return this;
	}

	pause() {
		return this;
	}
}

export default BagMobilePlugin;
