const fsextra = require('fs-extra');
const { exec } = require('child_process');

fsextra.copy('./src/app/otp', './dist-lib', err => {
  if (err) return console.error(err);
  console.log('Copied files');
  createDeclarations();
});

function createDeclarations() {
  exec('cd dist-lib && tsc index.ts --declaration', () => {
    console.log('Generated declarations (and some JS files...)');
    createPackageJson();
  });
}

function createPackageJson() {
  const packageJSON =  {
    "name": "otp-lib-gyf",
    "version": "1.0.0",
    "description": "Librería servicio OTP",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/cristiantorol/servicio-otp.git"
    },
    "keywords": [
      "Angular",
      "Angular2",
      "Library",
      "Example"
    ],
    "author": "Cristhian Toro",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/cristiantorol/servicio-otp.git/issues"
    },
    "homepage": "https://github.com/cristiantorol/servicio-otp.git#readme",
    "types": "index.d.ts"
  };
  fsextra.writeJson('./dist-lib/package.json', packageJSON, {spaces: 2}, err => {
    if (err) return console.error(err);
    console.log('Created package.json');
  });

}