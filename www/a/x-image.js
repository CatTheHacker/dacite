/**
 */
//
const observer = new IntersectionObserver(function(changes) {
    changes.forEach(function(change) {
        if(change.isIntersecting) {
            change.target.setAttribute("src", change.target.parentElement.getAttribute("data-src"));
            observer.unobserve(change.target);
	    }
    });
});
//
customElements.define("x-image", class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const i = document.createElement("img");
        observer.observe(i);
        this.appendChild(i);
    }
});
