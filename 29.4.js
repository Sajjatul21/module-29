function magaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['shihab', 'sajjatul', 'islam', 'shorub']
const myBigBuddy = magaFriends(friends);
// console.log(myBigBuddy);

if (friends.indexOf('shihab') != -1) {
    // console.log('shihab exists')
}
if (friends.includes('sajjatul') == true) {
    // console.log('sajjatul exists')
}
if (friends.indexOf('fox') != -1) {
    console.log('fox is exists ')
}
else {
    console.log('fox dosn`t exists')
}

// concate 
const first = [3, 64, 5723, 5673,];
const second = [64, 75, 23, 86, 3, 75, 4];
const combine = first.concat(second);
console.log(combine)