// Myla Fairchild
// Pictionary word generator. Let's get ready to drawwwwww!!!!!!!!
// © 2020

var categories = ['Beach ball', 'Glasses', 'Snowflake', 'Book', 'High heel',
'Desk', 'Door', 'Stairs', 'Bucket', 'Ice cream cone', 'Starfish', 'Igloo', 'Bird nest', 'Fridge', 'Strawberry', 'Butterfly', 'Lady bug',
'Flower', 'Sun', 'Camera', 'Lamp', 'Tire', 'Cat', 'Lion', 'Toast', 'Mailbox',
'Toothbrush', 'Window', 'Crayon', 'Horse shoe', 'Night', 'Tree',  'Toothpaste',
'Dolphin', 'Nose', 'Car', 'Shirt', 'Truck', 'Egg', 'Fish', 'Phone', 'Eiffel Tower', 'Peanut', 'Kiss', 'Pigtails', 'Hamburger', 'Brain', 'Kitten',
'Playground', 'Bubble bath', 'Kiwi', 'Pumpkin pie', 'Buckle', 'Dog', 'Bed',
'Lipstick', 'Raindrop', 'Bus', 'Fan',  'Lobster', 'Robot', 'Car accident',
'Lollipop', 'Chair', 'Sand castle', 'Burgler', 'Castle', 'Magnet', 'Slipper',
'Chainsaw', 'Megaphone', 'Snowball', 'Circus tent', 'Bird', 'Ghost',
'Mermaid', 'Sprinkler', 'Computer', 'Minivan', 'Statue of Liberty', 'Crib',
'Bat', 'House', 'Mount Rushmore', 'Tadpole', 'Dragon', 'Music', 'Teepee',
'Dumbbell', 'North pole', 'Apple', 'Santa', 'Telescope', 'Eel', 'Snake',
'Television', 'Nurse', 'Train', 'Eyes',  'Ferris wheel', 'Wheel', 'Owl',
'Tricycle', 'Flag', 'Pacifier', 'Tutu', 'Junk mail', 'Piano', 'Ruler',
'Globe', 'Attic', 'Glue stick', 'Pocket watch', 'Back seat', 'Highchair',
'Rock band', 'Birthday', 'Hockey stick', 'Sasquatch', 'Black hole', 'Hotel',
'Scrambled eggs', 'Jump rope', 'Hula hoop', 'Seat belt', 'Burrito', 'Koala',
'Captain', 'Leprechaun', 'Solar eclipse', 'Chandelier', 'Light', 'Space',
'Mask', 'Stethoscope', 'Cruise ship', 'Stork', 'Dance', 'Deodorant', 'Mr Potato Head', 'Thread', 'Sewing needle', 'Facebook', 'Pantyhose', 'Tourist',
'Plates', 'Picture Frame', 'Photo', 'WiFi', 'Full moon', 'Pilgram', 'Zombie',
'Vampire', 'Monster', 'Game', 'Pirate', 'Rainbow', 'Banana', 'Headphones',
'Fireworks', 'Beehive', 'Cupcake', 'Cake', 'Battery', 'Mountains',
'Minecraft', 'Saturn', 'Farm', 'Hospital', 'Scorpion', 'Giraffe', 'Frog',
'T-Rex', 'Dinosaur', 'Panda', 'Cemetary', 'Vase', 'Lips', 'Doll', 'Clock',
'Superman', 'Girl Scout', 'Cowboy', 'Pikachu', 'Spongebob', 'Baby Yoda', 'Shrek', 'Cook', 'Baby', 'Recycle', 'Bread', 'Braid', 'Necklace',
'Earring', 'Foot', 'Hand', 'Money', 'Box', 'Cow', 'Sheep', 'Chicken', 'Pig',
'Fox', 'Lizard', 'Squirrel', 'Swimming Pool', 'Guitar', 'Cup', 'Spoon',
'Fork', 'Pretzel', 'Baseball bat', 'Tennis racket', 'Basketball court',
'Pants', 'Plug', 'Skeleton', 'Stove', 'Teeth', 'Branch', 'Hair brush', 'Leaf',
'Coins', 'Surfboard', 'Pillow', 'Medicine', 'Bicycle', 'Weights', 'Gym',
'Sofa', 'Table', 'Cards', 'Football', 'Bracelet', 'Hat', 'Remote control',
'Bear', 'Dress', 'Keyboard', 'Plane', 'Button', 'Toilet', 'Sink', 'Cactus',
'Hourglass', 'Pinwheel', 'Jail cell', 'Pogo stick', 'Cigar', 'French fries',
'Parachute', 'Bar of soap', 'Record player', 'Record', 'Cane', 'Wrench',
'Emoji', 'Twitter', 'Rocketship', 'Pumpkin', 'Umbrella', 'Kite', 'Vaccum',
'Star', 'Spider', 'Drum', 'Cookie', 'Sandwich', 'Christmas Tree',
'Skateboard', 'Bird bath', 'Rice', 'Toaster', 'Calendar', 'Fire', 'Nachos',
'Unicorn', 'Candle', 'City', 'Mandala', 'Paint brush', 'Ring', 'Wheelchair',
'Boxing glove', 'Tattoo', 'Pickle', 'Bandaid', 'Court room', 'Purse',
'Biohazard', 'Popsicle', 'Soda', 'Hazmat suit', 'Hot dog', 'Knot', 'Suit and Tie', 'Tire', 'Rabbit', 'Crown', 'Sword', 'Washing machine', 'Clouds',
'Screw', 'Nail', 'Hammer', 'Drone', 'Helicopter', 'Blimp', 'Elephant', 'Pool table', 'Bowling Ball', 'Pencil', 'Sailboat', 'Gift', 'Taco', 'Doughnut',
'Cheese', 'Waffle', 'Milk', 'Corn', 'Sleep', 'Swim', 'Hug', 'Scissors',
'Love', 'Teapot', 'Key', 'Bomb', 'Dominoes', 'Gingerbread man', 'Bowtie',
'X-Ray', 'Treasure', 'Map', 'DNA', 'Basket', 'Heating pad', 'Sewing machine',
'Candy cane', 'Broom', 'Duster', 'Mop', 'Jar', 'Road', 'Credit card', 'Turtle'];

var word = categories[Math.floor(Math.random() * categories.length)];

console.log("You must draw a/an: " + word);


