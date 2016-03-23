var contactOpen = false;
var menuOpen = false;


function initPurpleLion(){
	console.log('init purple lion');
	// openOverlay('eclipse');

	document.getElementById('contact-button').addEventListener('click', contactToggle);
	document.getElementById('menu-button').addEventListener('click', menuToggle);

	initMenu();
}

function initMenu(){
	document.getElementById('menu-home').addEventListener('click', function(){selectMenu('home'); menuToggle();})
	document.getElementById('menu-products').addEventListener('click', function(){selectMenu('products'); menuToggle();})
	document.getElementById('menu-services').addEventListener('click', function(){selectMenu('services'); menuToggle();})
	document.getElementById('menu-clients').addEventListener('click', function(){selectMenu('clients'); menuToggle();})
	document.getElementById('menu-about').addEventListener('click', function(){selectMenu('about'); menuToggle();})
}

function selectMenu(page){

	document.getElementById('products-container').style.left = '-100%';
	document.getElementById('clients-container').style.left = '-100%';
	document.getElementById('services-container').style.left = '-100%';
	document.getElementById('about-container').style.left = '-100%';

	window.setTimeout(function(){
		switch(page){
			case 'home':
				// alert('home');
			break;
			case 'products':
				document.getElementById('products-container').style.left = '0px';
				document.getElementById('products-close').addEventListener('click', function(){
					selectMenu('home');
				})
			break;
			case 'services':
				document.getElementById('services-container').style.left = '0px';
				document.getElementById('services-close').addEventListener('click', function(){
					selectMenu('home');
				})
			break;
			case 'clients':
				document.getElementById('clients-container').style.left = '0px';
				document.getElementById('clients-close').addEventListener('click', function(){
					selectMenu('home');
				})
				document.getElementById('eclipseCaseStudy').addEventListener('click', function(){
					openOverlay('eclipse');
				})
			break;
			case 'about':
				document.getElementById('about-container').style.left = '0px';
				document.getElementById('about-close').addEventListener('click', function(){
					selectMenu('home');
				})
			break;
		}
	}, 400)
}

function openOverlay(contentSelect){

	document.getElementById('overlay').style.display = 'block';

	switch(contentSelect){
		case 'eclipse':
			document.getElementById('overlay-title').innerHTML = 'Eclipse Mattress Case Study';
			document.getElementById('overlay-content').innerHTML = "<img src='images/EclipseCase1.jpg' class='caseImage1' />The world of mattresses is not one that people would typically associate with being a fast-moving industry, but you would be surprised just how much time and effort goes into even one mattress. At Eclipse Mattress, our goal was to help Eclipse take something they were great at - mattress making - and help them with something they were not as proficient in - web presence, marketing, communicating with vendors - and made it a strength instead of a weakness.<br/><br/>For B2B companies, the perception of possible business partners is frequently more important even than how a typical consumer perceives a company. Without successful business relationships, B2B companies do not flourish for very long. With this in mind, one of our goals with Eclipse was to balance the need for extensive information that could be made available to vendors and more public information that could be made available to consumers. Like any company, Eclipse has its share of trade secrets it did not want everyone to see, and so we created a system where companies or vendors that Eclipse trusted could be given additional access to view information not visible to the general public.<br/><br/>In this way, not only was Eclipse able to build their “brand” amongst their vendors, but was also able to easily apprise vendors of upcoming products, new models, and promotions. By giving each vendor their own unique login information to access the vendor-specific information, vendors could submit PoS forms and other documentation that would allow Eclipse to fulfill their vendor’s orders from anywhere they needed. Considering Eclipse has vendors on five continents, this was an important feature!<br/><br/><img src='images/EclipseCase2.jpg' class='caseImage2' />When one of our clients don’t have to worry about their web presence and marketing aspects of their business, they can tackle more effectively other elements of running their business. Since the Eclipse website was made, their business has been doing well enough that PDL is currently creating another portal for them for one of their other brands, utilizing some of the same technologies that we previously harnessed. Eclipse is even looking into ways to conquer those last two remaining continents.";

			document.getElementById('overlay-close').addEventListener('click', function(){
				closeOverlay();
			})

		break;
	}

	window.setTimeout(function(){
		document.getElementById('overlay').style.opacity = '1';
	}, 400)
}

function closeOverlay(){
	document.getElementById('overlay').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('overlay').style.display = 'none';
	}, 400)
}

function contactToggle(){
	if(!contactOpen){
		document.getElementById('contact-close').style.webkitTransform = 'rotate(-90deg)';
		document.getElementById('contact-container').style.right = '0px';
		contactOpen = true;
	}else{
		document.getElementById('contact-close').style.webkitTransform = 'rotate(135deg)';
		if(window.innerWidth < 768){
			document.getElementById('contact-container').style.right = '-100%';
		}else{
			document.getElementById('contact-container').style.right = '-50%';			
		}
		contactOpen = false;
	}
}

function menuToggle(){
	if(!menuOpen){
		document.getElementById('menu-button').style.right = '150px';
		document.getElementById('menu-container').style.display = 'block';
		menuOpen = true;
		window.setTimeout(function(){
			document.getElementById('menu-container').style.opacity = '1';
			document.getElementById('menu-container').style.height = '260px';
		}, 400)
	}else{
		document.getElementById('menu-container').style.opacity = '0';
		document.getElementById('menu-container').style.height = '0px';

		window.setTimeout(function(){
			document.getElementById('menu-container').style.display = 'none';
			document.getElementById('menu-button').style.right = '20px';
			menuOpen = false;
		}, 400)
	}
}