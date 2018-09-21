# Robots!

This is a collection of examples for programming various robots using [CylonJS](http://cylonjs.com). I have found that not all the examples in the Cylon documentation work correctly, and while I'm working to help improve that, I am releasing these examples that I've actually gotten to work. These examples make for good starting points for which you can develop more complex programs.

This is a work in progress, and I hope to continously add more examples. Please contribute your own as well. The one thing that I'm aiming for is that every example here should actually work as expected.

NOTE: All of these examples have only been tested on OSX (Mac). I believe that the examples should work similarly on other platforms (except that the ports would need to be changed), and that the major differences between platforms involve installing the drivers for the various hardware components. Below I've provided the steps I took to install everything on OSX.

## Installation for OSX (Mac)

### General Installation

1. Install NodeJS by going to the [Node Website](http://nodejs.org) and clicking on the "Install" button.
2. Inside your terminal, create a folder for all your robots projects by entering `mkdir robots` or whatever other folder name you want to use.
3. Go into that folder by entering `cd robots`
4. Install Cylon with the following command: `npm install cylon`

### Installing Stuff for Ardrone

1. In the Terminal, go into your robots folder and then enter the following command: `npm install cylon-ardrone`
2. If you go to your Wifi settings, and your drone is on, you should a Wifi network called ardrone2_234435 or something like that. Connect your computer's Wifi to that "network".
3. To run the program, make sure your Terminal is navigated to the proper folder and run `node PROGRAM_NAME.js` For example: `node basic.js`

### Installing Stuff for Keyboard

1. In the Terminal, go into your robots folder and then enter the following command: `npm install cylon-keyboard`
2. To run the program, make sure your Terminal is navigated to the proper folder and run `node PROGRAM_NAME.js` For example: `node basic.js`

### Installing Stuff for Xbox

1. If you don't yet have Homebrew installed on your computer, install Homebrew by running the following as one line in the Terminal: `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` It doesn't matter which folder you're in.
2. Download this installer and run it: http://files.tattiebogle.net/360/360ControllerInstall.dmg
3. Enter the following command in your terminal: `brew install sdl2 sdl2_image sdl2_ttf`
4. Make sure you're in your robots folder and enter: `npm install cylon-joystick`
5. Plug your Xbox controller into one of your computer's USB ports.
6. To run the program, make sure your Terminal is navigated to the proper folder and run `node PROGRAM_NAME.js` For example: `node basic.js`






