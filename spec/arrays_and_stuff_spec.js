describe('array literals', () => {
    it('has them', () => {
        const things = [];
        expect(things[99]).toBeUndefined();
        things[0] = 1;
        things[1] = 3.4;
        things[2] = things;
        expect(things[0]).toBe(1);

    });
    it('they can be initialized', () => {
        const colors = ['red', 'green', 'orange'];
        expect(colors.length).toBe(3);
        expect(colors[0]).toBe('red');
    });
    it('destructuring arrays', () => {
        const LuckyNumbers = [1, 2, 108, 22];

        //const third = LuckyNumbers[2];
        // const fourth = LuckyNumbers[3];
        const [, , third, fourth] = LuckyNumbers;

        expect(third).toBe(108);
        expect(fourth).toBe(22);

    });

});
describe('object literals', () => {
    it('a simple example', () => {
        const movie = {};
        movie.title = 'Jaws';
        movie.director = 'Spielberg';
        movie.yearReleased = 1977;

        expect(movie.title).toBe('Jaws');
        expect(movie.yaerReleased).toBeUndefined();
        expect(movie.yearReleased).toBe(1977);

        movie.yaerReleased = 1988 //notice it actually created this attribute

    });
    it('initializing an object', () => {
        const person = {
            name: {
                first: 'Adam',
                last: 'Driver'
            },
            roles: ['Kylo Ren', 'Ben Solo']
        };
        expect(person.name.last).toBe('Driver');
        expect(person.roles[1]).toBe('Ben Solo');
    });
    it('property access', () => {
        const someObj = { color: 'blue' };
        //notice how you can reference the object like an array name
        expect(someObj.color).toBe('blue');
        expect(someObj['color']).toBe('blue');
        //notice how you can define object properties by mapping
        const cast = {
            'luke skywalker': 'Mark Hamill',
            'han solo': 'Harrison Ford'
        };

        expect(cast['luke skywalker']).toBe('Mark Hamill');

    });
    it('destructuring an object', () => {
        const book = {
            title: 'Walden',
            author: 'Thoreau',
            price: 22.38,
        };
        //const title = book.title;
        //const price = book.price;
        const { title, price: cost } = book;

        expect(title).toBe('Walden');
        expect(cost).toBe(22.38);


    });
});
describe('functions', () => {
    describe('function definitions and literals', () => {
        it('creating a function', () => {

            //Named function
            
            const answer = add(2, 2);
            expect(answer).toBe(4);
            //anonymous, immediately invoked function expression  (IIFE)
            const answer2 = (function (a, b) { return a - b; })(10, 2);
            expect(answer2).toBe(8);
            const multiply = function (a, b) { return a * b; };
            expect(multiply(3, 3)).toBe(9);

            //anonymous function with a phat arrow
            const divide = (a, b) => a / b;
            expect(divide(10, 2)).toBe(5);

            const formatName = (first,last) => {
                console.log('Acount to format a name!');
                return `${last}, ${first}`
            };
            expect(formatName('Han','Solo')).toBe('Solo, Han');
            function add(a, b) {
                return a + b;
            }
        });
        it('quick example of a Higher-order Function', () => {
             // Dima's code
             function formatName(first, last, wrapper) {
                const fullName = `${last}, ${first}`;
                return wrapper(fullName);
            }
            // our code
            function addStars(name) {
                return `***${name}***`;
            }
            expect(formatName('Luke', 'Skywalker', addStars)).toBe('***Skywalker, Luke***');
            //n is an anonymous function
            const name = formatName ('Jayshree','Laks',(n)  => '     '+n);
            expect(name).toBe('     Laks, Jayshree');
        });
    });

});