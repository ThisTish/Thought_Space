const colors = require('colors')


const usernamesArray = [
	'Django',
	'CrookedColours',
	'GlassAnimals',
	'LittlePeople',
	'Anima',
	'BeatsAntique',
	'MungoJerry',
	'CloZinger',
	'HotChip',
	'Emancipator',
	'Fujiya',
	'Miyagi',
	'PolishAmbassador',
	'Ratatat',
	'Grammatik',
	'Makeba',
	'Frameworks',
	'JonKennedy',
	'BigWild',
	'AlunaGeorge',
	'EmpireOfTheSun',
	'2DoorCinema',
	'TvOnTheRadio',
	'Pheonix',
	'BillyEyelash',
	'HippieSabatoge',
	'Avicii',
	'Rezz',
	'ReginaSpektor',
	'TuneYards',
	'Menomena',
	'CosmoSheldrake',
	'SunsetRubdown',
	'AronChupa',
	'HilltopHoods',
	'HotSugar',
	'LemonJelly',
	'Yppah',
	'TooManyZoos',
	'PrettyLights',
	'STRFKR',
	'ZiggyStardust',
	'PurityRing',
	'Dirtwire',
	'Santigold',
	'GRiZ',
	'WolfParade',
	'BlueCadet',
	'MoonFace',
	'WaxTailor'
]

const emailsArray =[
'django.reinhardt@example.com',
'phil.slabber@example.com',
'dave.bayley@example.com',
'laurent.clerc@example.com',
'anima.sound@example.com',
'david.satori@example.com',
'ray.dorset@example.com',
'arthur.lemaire@example.com',
'alexis.taylor@example.com',
'doug.appling@example.com',
'david.best@example.com',
'steve.lewis@example.com',
'david.sugalski@example.com',
'evan.mast@example.com',
'denis.jasarevic@example.com',
'miriam.makeba@example.com',
'matthew.brewer@example.com',
'jon.kennedy@example.com',
'jackson.stell@example.com',
'aluna.francis@example.com',
'luke.steele@example.com',
'alex.trimble@example.com',
'tunde.adebimpe@example.com',
'thomas.mars@example.com',
'billie.eilish@example.com',
'jeff.saurer@example.com',
'tim.bergling@example.com',
'isabelle.rezazadeh@example.com',
'regina.spektor@example.com',
'merrill.garbus@example.com',
'justin.harris@example.com',
'cosmo.sheldrake@example.com',
'spencer.krug@example.com',
'aron.ekberg@example.com',
'suffa.matthew@example.com',
'nick.koenig@example.com',
'fred.deakin@example.com',
'joe.corrales@example.com',
'leo.pellegrino@example.com',
'derek.smith@example.com',
'josh.hodges@example.com',
'david.bowie@example.com',
'megan.james@example.com',
'david.satori@example.com',
'santi.white@example.com',
'grant.kwiecinski@example.com',
'spencer.krug@example.com',
'blue.cadet@example.com',
'spencer.krug@example.com',
'david.best@example.com',
]

const thoughtsArray = [
"I dream of floating on Nuages.",
"Flowing through colors with Flow.",
"Heat Waves of nostalgia wash over me.",
"Patterns of Aldgate echo in my mind.",
"Lost in the beats of 68.",
"Antique beauty beats resonate within.",
"In the Summertime, memories dance.",
"Sinking into the rhythm of Sinking.",
"Over and Over, the melody plays.",
"Maps guide my thoughts.",
"Ankle Injuries remind me of adventures.",
"Uh, Knickerbocker and Transparent things",
"Let the Rhythm Just carry me away.",
"Loud Pipes announce the arrival.",
"Just Jammin' through the day.",
"Makeba's voice whispers in the wind.",
"Breaks in the silence.",
"Tonto's Release sparks imagination.",
"Aftergold glimmers in the distance.",
"You Know You Like It, embrace it.",
"Walking on a Dream, chasing stars.",
"What You Know shapes my reality.",
"Wolf Like Me howls in the night.",
"1901, a year of possibilities.",
"Bad Guy lurks in the shadows.",
"Devil Eyes gaze into my soul.",
"Wake Me Up from this dream.",
"Edge of reality, where Rezz resides.",
"Fidelity to the beat.",
"Bizness of life and music.",
"Wet and Rusting, memories fade.",
"The Moss grows silently.",
"Shut Up I Am Dreaming of Places Where Lovers Have Wings.",
"I'm an Albatraoz, soaring high.",
"Cosby Sweater, comfort in sound.",
"Mama, I'm a Man, standing strong.",
"The Staunton Lick, a taste of rhythm.",
"Never Mess With Sunday, it's sacred.",
"Brasshouse Volume 1: Survival of the Flyest, eclectic vibes.",
"Finally Moving forward.",
"Rawnald Gregory Erickson the Second, an enigmatic figure.",
"David Bowie, the legend lives on.",
"Fineshrine, a place of worship.",
"Taiga, wild and untamed.",
"L.E.S. Artistes, tales of city life.",
"My Friends and I, a bond unbreakable.",
"I'll Believe in Anything, dreams come true.",
"Remo Drive, the road ahead.",
"Spencer Krug, melodies of the heart.",
"Que Sera, whatever will be."
]

const reactionsArray = [
		'😊',
		'🎶',
		'🌟',
		'😍',
		'🤔',
		'🎉',
		'😂',
		'💖',
		'🙌',
		'😎',
		'😱',
		'🌈',
		'🎸',
		'🕺',
		'🌌',
		'🎵',
		'🔥',
		'🤩',
		'🎈',
		'🍃'
]

// utility functions to return arrays for seeding

const getRandom = (array) =>{
	let i = Math.floor(Math.random()*array.length)
	const property = array[i]
	console.log(`${property} ${i} property and i data.js 193`.random)
	return property
}


const usernamesWithEmail = () =>{
	const userEmailObjects = usernamesArray.map((username, index) => ({
		username,
		email: emailsArray[index]
		})	
	)
	// console.log(`usermeailobject ln 204 ${JSON.stringify(userEmailObjects)}`.magenta)
	return userEmailObjects
	
}


const assignUserTothought = () => {
	const thoughtObjects = thoughtsArray.map((thought, index) => ({
		thoughtText: thought,
		username: usernamesArray[index]
		})	
	)

	// console.log(`thoughtObject 217 data.js ${JSON.stringify(thoughtObjects)}`.cyan)
	return thoughtObjects
}


// to assign a user to a reaction
// not needed until figure out how to assign reactions to thoughts
// const assignUsernames = () => {
// 	let assignedArray = []
// 	reactionsArray.forEach(reaction =>{
// 		const pairedObject = {
// 			reactionBody: reaction,
// 			username: getRandom(usernamesArray)
// 		}
// 		assignedArray.push(pairedObject)

// 	})
// 	console.log(`data 232 assignedArray:${JSON.stringify(assignedArray)}`.yellow)
// 	console.log(`reactions now have users`.bgBlue)
// 	return assignedArray
// }


module.exports = { usernamesWithEmail, getRandom, assignUserTothought }
