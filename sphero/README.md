
(currretly not working, but you could try to fix it)

### Installing Stuff for Sphero

1. In the Terminal, go into your robots folder and then enter the following command: `npm install cylon-sphero`
2. Your computer may ask if you want to install the XCode Developer Tools. If so, click the button that says "Install".
3. If you had to do the previous step, enter the `npm install cylon-sphero` command again.
4. Tap the Sphero twice to make sure it's on.
5. Go to your computer's Bluetooth settings and pair with the Sphero. It’s okay if it doesn’t *stay* connected.
6. In the Terminal, run: `ls /dev/tty.Sphero* `
7. Get the result and save it somewhere. This is the called the ‘port’. It will look something like: `/dev/tty.Sphero-BBP-AMP-SPP`
8. In whatever example programs you're working in, make sure to find the Sphero "port" and replace it with yours. 
9. To run the program, make sure your Terminal is navigated to the proper folder and run `node PROGRAM_NAME.js` For example: `node basic.js`
