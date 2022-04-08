const anthem = 'amar sonar bangla ami toamy valobasi';
const word = anthem.split(' ');
const wordA = anthem.split('a')
const wordR = anthem.split('r')
const smallSlice = anthem.slice(5, 16)
const anotherPart = anthem.substr(11, 9)
const anotherAnotherPart = anthem.substring(11, 17);
const first = "Amar";
const second = "Tomar";
const fullString = first.concat(second).concat('valobasa').concat('ciridini').concat('thakbe');
const name = ['amar', 'r', 'tomar', 'valobasa'];
const allJoined = name.join(', ');
console.log(allJoined)