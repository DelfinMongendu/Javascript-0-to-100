// Log number
console.log(100);

// Log string
console.log("Hello World");

// Log multiple values
console.log(20,'Hello',true)

// Log Variable
x = 100
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('warning');

// Log object as table
console.table(
          {name:'brad',
           email:'brad@gmail.com'
        });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('warning');
console.groupEnd();

// add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);