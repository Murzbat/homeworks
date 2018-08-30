class options {
	constructor(height, width,fontSize,textAlign,bg) {
		this.height = height;
		this.width = width;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.bg = bg;
	}

	newElement() {
		let newDiv = document.createElement('div'),
			body = document.getElementsByTagName('Body')[0];

		newDiv.innerHTML = `I'm new div`;
		newDiv.style.cssText = `height: ${this.height} \
					width: ${this.width};\
					fontSize: ${this.fontsize}; \
					textAlign: ${this.textAlign}; \
					background: ${this.bg}`;
		body.appendChild(newDiv);
	}
}

let test = new options(10,6546,648,64,'red');

console.log(test.newElement());