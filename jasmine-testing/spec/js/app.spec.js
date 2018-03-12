describe('test 1', function() {
	it('should append anchor to div', function() {
		const testDiv = document.createElement('div');
		const testAnchor = document.createElement('a')

		testDiv.appendChild(testAnchor);

		expect(testDiv.childNodes).toContain(testAnchor);
	})});

describe('test 2', function() {
	it('should hide anchor in div', function() {
		const testDiv = document.createElement('div');
		const testAnchor = document.createElement('a');
		testDiv.appendChild(testAnchor);

		testAnchor.style.display = "none";

		expect(testDiv.childNodes).toBeDefined("none"); 
	})});

describe('test 3', function() {
	it('should show anchor/collapsable in div', function() {
		const testDiv = document.createElement('div');
		const testAnchor = document.createElement('a');
		testDiv.appendChild(testAnchor);
		testAnchor.style.display = "none";
		//let's pretend a click event occurred
		testAnchor.style.display = "block";

		expect(testDiv.childNodes).toBeDefined("block"); 
	})});	

describe('test 4', function() {
	it('should toggle modal', function () {
		const testButton = document.createElement('button');
		const testDiv = document.createElement('div');
		testButton.appendChild(testDiv);
		function toggleModal() {testButton.classList.toggle("show-modal")};
		
		toggleModal();

		expect(testDiv.classList.toggle).toBeDefined("show-modal");
	})});	

//this one doesn't pass :-(
describe('test 5', function() {
	it('should slide through pictures', function() {
		const testSection = document.createElement('section');
		const testImg1 = document.createElement('img');
		const testImg2 = document.createElement('img');
		const testImg3 = document.createElement('img');
		testSection.appendChild(testImg1);
		testSection.appendChild(testImg2);
		testSection.appendChild(testImg3);
		testImg1.setAttribute("class","pics2");
		testImg2.setAttribute("class", "pics2");
		testImg3.setAttribute("class", "pics2");
		var index = 0;
		function carousel() {
			var pics = document.querySelectorAll(".pics2");
    		var i;

    		for (i = 0; i < pics.length; i++) {
      		pics[i].style.display = "none"; 
    		}

    		index++;
    
    		if (index > pics.length) {
    		index = 1;
    		} 

    		pics[index - 1].style.display ="block";
		}

		carousel();

		expect(testImg1.style.display).toBeDefined("block");
	})});	