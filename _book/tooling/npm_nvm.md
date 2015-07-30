# NPM, NVM

### NVM 
https://github.com/creationix/nvm
Node Version Manager for multiple active node.js versions
e.g. Ghoast only work with nodejs 0.10.x version, not 0.12 

```
//install nvm
curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash
source ~/.nvm/nvm.sh //activate

//install nodejs
nvm install 0.10 //will install v0.10.36
nvm use 0.10
```

### NPM 

```
npm cache clean -f 
npm init //generate package.json
npm install lodash --save //save to package.json,
npm install -g jshint
npm update
npm uninstall --save lodash

npm -g ls //list all global installed npm module
npm -g ls | grep -v 'npm@' | awk '/@/ {print $2}' | awk -F@ '{print $1}' | xargs npm -g rm //nuke all global installed npm module 

//solving "don't have permission to access dir issue" 
sudo chown -R $USER /usr/local
 
```

