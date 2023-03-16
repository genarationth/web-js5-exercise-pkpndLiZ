const addQueue = (peopleNames) => {
    peopleNames.map((name) => {
        queue.push(name);
    })

    //shorter solution
    // queue = [...queue, ...peopleNames];
}

const jumeQueue = (position, name) => {
    queue.splice(position, 0, name);
}

const shiftQueue = () => {
    queue.shift();
}

// part1
let queue = ['Sofia', 'David', 'Juan'];
console.log(`current queue: ${queue}\n`);

// part2 
//Added Sara and Augusting to the back of the line.
addQueue(['Sara', 'Augustin']);
console.log('Added Sara and Augusting to the back of the line.');
console.log(`current queue: ${queue}\n`);

// The first person in line is called to the teller.
shiftQueue();
console.log('The first person in line is called to the teller.');
console.log(`current queue: ${queue}\n`);

// part3
//It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line.
jumeQueue(1, 'Renata');
console.log('It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line.');
console.log(`current queue: ${queue}\n`);

// One more person (Elena) shows up and goes to the end of the line. 
addQueue(['Elena']);
console.log('One more person (Elena) shows up and goes to the end of the line.'); 
console.log(`current queue: ${queue}`);
