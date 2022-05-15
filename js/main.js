/* QUOTES */

const quotes = [
	'About 99% of the time, the right time is right now.',
	'No one is as impressed with your possessions as you are.',
	'Don’t ever work for someone you don’t want to become.',
	'Cultivate 12 people who love you, because they are worth more than 12 million people who like you.',
	'Don’t keep making the same mistakes; try to make new mistakes.',
	'If you stop to listen to a musician or street performer for more than a minute, you owe them a dollar.',
	'Anything you say before the word “but” does not count.',
	'When you forgive others, they may not notice, but you will heal. Forgiveness is not something we do for others; it is a gift to ourselves.',
	'Courtesy costs nothing. Lower the toilet seat after use. Let the people in the elevator exit before you enter. Return shopping carts to their designated areas. When you borrow something, return it better shape (filled up, cleaned) than when you got it.',
	'Whenever there is an argument between two sides, find the third side.',
	'Efficiency is highly overrated; Goofing off is highly underrated. Regularly scheduled sabbaths, sabbaticals, vacations, breaks, aimless walks and time off are essential for top performance of any kind. The best work ethic requires a good rest ethic.',
	'When you lead, your real job is to create more leaders, not more followers.',
	'Criticize in private, praise in public.',
	'Life lessons will be presented to you in the order they are needed. Everything you need to master the lesson is within you. Once you have truly learned a lesson, you will be presented with the next one. If you are alive, that means you still have lessons to learn.',
	'It is the duty of a student to get everything out of a teacher, and the duty of a teacher to get everything out of a student.',
	'If winning becomes too important in a game, change the rules to make it more fun. Changing rules can become the new game.',
	'Ask funders for money, and they’ll give you advice; but ask for advice and they’ll give you money.',
	'Productivity is often a distraction. Don’t aim for better ways to get through your tasks as quickly as possible, rather aim for better tasks that you never want to stop doing.',
	'Immediately pay what you owe to vendors, workers, contractors. They will go out of their way to work with you first next time.',
	'The biggest lie we tell ourselves is “I Don’t need to write this down because I will remember it.”',
	'Your growth as a conscious being is measured by the number of uncomfortable conversations you are willing to have.',
	'Speak confidently as if you are right, but listen carefully as if you are wrong.',
	'Handy measure: the distance between your fingertips of your outstretched arms at shoulder level is your height.',
	'The consistency of your endeavors (exercise, companionship, work) is more important than the quantity. Nothing beats small things done every day, which is way more important than what you do occasionally.',
	'Making art is not selfish; it’s for the rest of us. If you don’t do your thing, you are cheating us.',
	'Never ask a woman if she is pregnant. Let her tell you if she is.',
	'Three things you need: The ability to not give up something till it works, the ability to give up something that does not work, and the trust in other people to help you distinguish between the two.',
	'When public speaking, pause frequently. Pause before you say something in a new way, pause after you have said something you believe is important, and pause as a relief to let listeners absorb details.',
	'There is no such thing as being “on time.” You are either late or you are early. Your choice.',
	'Ask anyone you admire: Their lucky breaks happened on a detour from their main goal. So embrace detours. Life is not a straight line for anyone.',
	'The best way to get a correct answer on the internet is to post an obviously wrong answer and wait for someone to correct you.',
	'You’ll get 10x better results by elevating good behavior rather than punishing bad behavior, especially in children and animals.',
	'Spend as much time crafting the subject line of an email as the message itself because the subject line is often the only thing people read.',
	'Don’t wait for the storm to pass; dance in the rain.',
	'When checking references for a job applicant, employers may be reluctant or prohibited from saying anything negative, so leave or send a message that says, “Get back to me if you highly recommend this applicant as super great.” If they don’t reply take that as a negative.',
	'Use a password manager: Safer, easier, better.',
	'Half the skill of being educated is learning what you can ignore.',
	'The advantage of a ridiculously ambitious goal is that it sets the bar very high so even in failure it may be a success measured by the ordinary.',
	'A great way to understand yourself is to seriously reflect on everything you find irritating in others.',
	'Keep all your things visible in a hotel room, not in drawers, and all gathered into one spot. That way you’ll never leave anything behind. If you need to have something like a charger off to the side, place a couple of other large items next to it, because you are less likely to leave 3 items behind than just one.',
	'Denying or deflecting a compliment is rude. Accept it with thanks, even if you believe it is not deserved.',
	'Always read the plaque next to the monument.',
	'When you have some success, the feeling of being an imposter can be real. Who am I fooling? But when you create things that only you — with your unique talents and experience — can do, then you are absolutely not an imposter. You are the ordained. It is your duty to work on things that only you can do.',
	'What you do on your bad days matters more than what you do on your good days.',
	'Make stuff that is good for people to have.',
	'When you open paint, even a tiny bit, it will always find its way to your clothes no matter how careful you are. Dress accordingly.',
	'To keep young kids behaving on a car road trip, have a bag of their favorite candy and throw a piece out the window each time they misbehave.',
	'You cannot get smart people to work extremely hard just for money.',
	'When you don’t know how much to pay someone for a particular task, ask them “what would be fair” and their answer usually is.',
	'90% of everything is crap. If you think you don’t like opera, romance novels, TikTok, country music, vegan food, NFTs, keep trying to see if you can find the 10% that is not crap.',
	'You will be judged on how well you treat those who can do nothing for you.',
	'We tend to overestimate what we can do in a day, and underestimate what we can achieve in a decade. Miraculous things can be accomplished if you give it ten years. A long game will compound small gains to overcome even big mistakes.',
	'Thank a teacher who changed your life.',
	'You can’t reason someone out of a notion that they didn’t reason themselves into.',
	'Your best job will be one that you were unqualified for because it stretches you. In fact only apply to jobs you are unqualified for.',
	'Buy used books. They have the same words as the new ones. Also libraries.',
	'You can be whatever you want, so be the person who ends meetings early.',
	'A wise man said, “Before you speak, let your words pass through three gates. At the first gate, ask yourself, “Is it true?” At the second gate ask, “Is it necessary?” At the third gate ask, “Is it kind?”',
	'Take the stairs.',
	'What you actually pay for something is at least twice the listed price because of the energy, time, money needed to set it up, learn, maintain, repair, and dispose of at the end. Not all prices appear on labels. Actual costs are 2x listed prices.',
	'When you arrive at your room in a hotel, locate the emergency exits. It only takes a minute.',
	'The only productive way to answer “what should I do now?” is to first tackle the question of “who should I become?”',
	'Average returns sustained over an above-average period of time yield extraordinary results. Buy and hold.',
	'It’s thrilling to be extremely polite to rude strangers.',
	'It’s possible that a not-so smart person, who can communicate well, can do much better than a super smart person who can’t communicate well. That is good news because it is much easier to improve your communication skills than your intelligence.',
	'Getting cheated occasionally is the small price for trusting the best of everyone, because when you trust the best in others, they generally treat you best.',
	'Art is whatever you can get away with.',
	'For the best results with your children, spend only half the money you think you should, but double the time with them.',
	'Purchase the most recent tourist guidebook to your home town or region. You’ll learn a lot by playing the tourist once a year.',
	'Don’t wait in line to eat something famous. It is rarely worth the wait.',
	'To rapidly reveal the true character of a person you just met, move them onto an abysmally slow internet connection. Observe.',
	'Prescription for popular success: do something strange. Make a habit of your weird.',
	'Be a pro. Back up your back up. Have at least one physical backup and one backup in the cloud. Have more than one of each. How much would you pay to retrieve all your data, photos, notes, if you lost them? Backups are cheap compared to regrets.',
	'Don’t believe everything you think you believe.',
	'To signal an emergency, use the rule of three; 3 shouts, 3 horn blasts, or 3 whistles.',
	'At a restaurant do you order what you know is great, or do you try something new? Do you make what you know will sell or try something new? Do you keep dating new folks or try to commit to someone you already met? The optimal balance for exploring new things vs exploiting them once found is: 1/3. Spend 1/3 of your time on exploring and 2/3 time on deepening. It is harder to devote time to exploring as you age because it seems unproductive, but aim for 1/3.',
	'Actual great opportunities do not have “Great Opportunities” in the subject line.',
	'When introduced to someone make eye contact and count to 4. You’ll both remember each other.',
	'Take note if you find yourself wondering “Where is my good knife? Or, where is my good pen?&#8221; That means you have bad ones. Get rid of those.',
	'When you are stuck, explain your problem to others. Often simply laying out a problem will present a solution. Make “explaining the problem” part of your troubleshooting process.',
	'When buying a garden hose, an extension cord, or a ladder, get one substantially longer than you think you need. It’ll be the right size.',
	'Don’t bother fighting the old; just build the new.',
	'Your group can achieve great things way beyond your means simply by showing people that they are appreciated.',
	'When someone tells you about the peak year of human history, the period of time when things were good before things went downhill, it will always be the years of when they were 10 years old — which is the peak of any human’s existence.',
	'You are as big as the things that make you angry.',
	'When speaking to an audience it’s better to fix your gaze on a few people than to “spray” your gaze across the room. Your eyes telegraph to others whether you really believe what you are saying.',
	'Habit is far more dependable than inspiration. Make progress by making habits. Don’t focus on getting into shape. Focus on becoming the kind of person who never misses a workout.',
	'When negotiating, don’t aim for a bigger piece of the pie; aim to create a bigger pie.',
	'If you repeated what you did today 365 more times will you be where you want to be next year?',
	'You see only 2% of another person, and they see only 2% of you. Attune yourselves to the hidden 98%.',
	'Your time and space are limited. Remove, give away, throw out things in your life that Don’t spark joy any longer in order to make room for those that do.',
	'Our descendants will achieve things that will amaze us, yet a portion of what they will create could have been made with today’s materials and tools if we had had the imagination. Think bigger.',
	'For a great payoff be especially curious about the things you are not interested in.',
	'Focus on directions rather than destinations. Who knows their destiny? But maintain the right direction and you’ll arrive at where you want to go.',
	'Every breakthrough is at first laughable and ridiculous. In fact if it did not start out laughable and ridiculous, it is not a breakthrough.',
	'If you loan someone $20 and you never see them again because they are avoiding paying you back, that makes it worth $20.',
	'Copying others is a good way to start. Copying yourself is a disappointing way to end.',
	'The best time to negotiate your salary for a new job is the moment AFTER they say they want you, and not before. Then it becomes a game of chicken for each side to name an amount first, but it is to your advantage to get them to give a number before you do.',
	'Rather than steering your life to avoid surprises, aim directly for them.',
	'Don’t purchase extra insurance if you are renting a car with a credit card.',
	'If your opinions on one subject can be predicted from your opinions on another, you may be in the grip of an ideology. When you truly think for yourself your conclusions will not be predictable.',
	'Aim to die broke. Give to your beneficiaries before you die; it’s more fun and useful. Spend it all. Your last check should go to the funeral home and it should bounce.',
	'The chief prevention against getting old is to remain astonished.'
]

/* GLOBAL VARS */

const p = document.querySelector('blockquote p');
const favsContainer = document.querySelector('.favs');
const btnSaveFav = document.getElementById('btn-save-fav');
const btnOpenFav = document.getElementById('btn-open-fav');
const btnCloseFav = document.getElementById('btn-close-fav');
let currQuote;

/* SELECT, SAVE AND DISPLAY QUOTE */

function selectRandomQuote(){

	const r = Math.floor(Math.random()*quotes.length);
	p.textContent = quotes[r];
	p.dataset.index = r;

	// save current quote value
	currQuote = quotes[r];

	// register events when page loads
	// use named function so events can be removed later in showProcessing()
	window.addEventListener('keypress', displayRandomQuote);
	p.addEventListener('touchstart', displayRandomQuote);

	// set initial visibility of buttons
	checkFavs();

}

/* LOAD FAVS WHEN "VIEW FAVS" BUTTON IS CLICKED */

function getFavs(){
	const favsGroup = document.querySelector('.favs-group');
	if( localStorage.getItem('favs') ){
		const favsResults = JSON.parse(localStorage.getItem('favs'));
		const favs = favsResults.map(function(f,i){
			return `<div class="fav-quote"><blockquote><p data-index="${i}">${f}</p></blockquote><button>X</button></div>`;
		})
		favsGroup.innerHTML = favs.reverse().join('');
		// handle delete
		const btnDelFav = document.querySelectorAll('.favs-group button');
		deleteFavs(btnDelFav);
	}
}

/* SAVE CURRENT QUOTE WHEN "SAVE" BUTTON IS CLICKED */

function saveFavs(){
	if( localStorage.getItem('favs') ){
		const favsResults = JSON.parse(localStorage.getItem('favs'));
		// checkFavs() ensures that the current quote is not already in storage
		favsResults.push(currQuote);
		localStorage.setItem('favs',JSON.stringify(favsResults));
	} else {
		let savedFaves = [];
		savedFaves.push(currQuote);
		localStorage.setItem('favs',JSON.stringify(savedFaves));
	}
}

/* DELETE FAVS VIA FAVS OVERLAY */

function deleteFavs(nodes){
	nodes.forEach(function(b){
		b.addEventListener('click',function(e){
			e.preventDefault();
			// remove element from page (not array)
			b.parentElement.remove();
			// close panel if there are no more quotes on the page
			if(document.querySelector('.favs-group').childElementCount === 0){
				setTimeout(function(){
					updateFavs();
					favsContainer.classList.add('closed');
				}, 200)
			}
		})
	})
}

/* UPDATE LOCAL STORAGE ARRAY BASED ON USER SELECTIONS IN FAVS OVERLAY */

function updateFavs(){
	// to delete items from array and keep track of 
	// index positions is rough; instead, create a new array
	// based on the favs remaining when the overlay closes
	const remainingFavs = document.querySelectorAll('.fav-quote blockquote p');
	// spread nodelist into an array and map
	const favsToSave = [...remainingFavs].map(f => f.textContent);
	// update local storage
	localStorage.setItem('favs',JSON.stringify(favsToSave));
	// enable/disable buttons
	checkFavs();
}

/* MANAGE SAVE AND VIEW/DISPLAY BUTTON STATES */

function checkFavs(){
	// check if local storage item exists
	if(JSON.parse(localStorage.getItem('favs'))){
		// have to check length of parsed value (otherwise JSON strings are counted)
		if(JSON.parse(localStorage.getItem('favs')).length){
			const favsResults = JSON.parse(localStorage.getItem('favs'));
			// includes() will return true or false
			btnSaveFav.disabled = favsResults.includes(currQuote);
			btnOpenFav.disabled = false;
		} else {
			btnOpenFav.disabled = true;
			btnSaveFav.disabled = false
		}
	}
}

/* PREVENT SAVE AND VIEW/DISPLAY DURING SAVE PROCESS */

function showProcessing(){
	// vars
	const span = btnSaveFav.querySelector('span');
	const defaultIcon = span.innerHTML;
	const spacebarNote = document.querySelector('footer p');;
	const progressCircle = '<svg class="icon-progress" viewBox="0 0 512 512" title="circle-notch"><path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" /></svg>';
	const progressCheck = '<svg class="icon-check" viewBox="0 0 512 512" title="check"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>';
	// processing initial stage
	span.innerHTML = progressCircle;
	btnSaveFav.classList.add('saving');
	btnOpenFav.disabled = true;
	window.removeEventListener('keypress', displayRandomQuote);
	p.removeEventListener('touchstart', displayRandomQuote);
	spacebarNote.classList.add('disabled');
	// processing next stage
	setTimeout(function(){
	  span.innerHTML = progressCheck;
	  btnSaveFav.classList.add('confirmed');
	  saveFavs();
	  // processing final stage
	  setTimeout(function(){
	    span.innerHTML = defaultIcon;
	    btnSaveFav.classList.remove('confirmed','saving');
	    btnOpenFav.disabled = false;
	    window.addEventListener('keypress', displayRandomQuote);
	    p.addEventListener('touchstart', displayRandomQuote);
	    spacebarNote.classList.remove('disabled');
	    checkFavs();
	  },1000)
	},1000)
}

/* SELECT RANDOM QUOTE */

function displayRandomQuote(e){
	// adding preventDefault prevents basic touch events from zooming on mobile Safari
	e.preventDefault();
	if(e.key === ' ' || e.type === 'touchstart'){
	    selectRandomQuote();
	}
	// enable/disable buttons
	checkFavs();
}

/* ACCOUNT FOR ADDRESS BAR SHOWING/HIDING (via https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9) */

function setAppHeight(){
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight/16}rem`)
}

/* EVENTS */

btnSaveFav.addEventListener('click',function(e){
	e.preventDefault();
	// need to remove focus to prevent spacebar from triggering
	btnSaveFav.blur();
	showProcessing();
})

btnOpenFav.addEventListener('click',function(e){
	e.preventDefault();
	favsContainer.classList.remove('closed');
	getFavs();
})

btnCloseFav.addEventListener('click',function(e){
	e.preventDefault();
	// save updated list of quotes
	updateFavs();
	favsContainer.classList.add('closed');
})

window.addEventListener('resize', setAppHeight);

selectRandomQuote();
setAppHeight();
