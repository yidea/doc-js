# Webstorm & IntelliJ

### Intellij 13
- Shortcuts 
  * F5 run project 
  * F4 Refresh Chrome (set via BetterTouchTool while F4 from Webstorm)
  * Ctrl + +/- //increase/decrease code font size
  * Ctrl + Q //goto last edit line
  * Ctrl + N //create new file
  
  * Alt + arrow left/right //move caret a word forward/backward
  * Alt + arrow up/down //extend/shrink selection
  * Alt + Enter //correct typo w dictionary  
  
  * Cmd + G //goto line #
  * Cmd + , //preference 
  * Cmd + F12 //bring up the internal terminal
  * Cmd + ctrl + F //reformat code 
  * Cmd + alt + M //extract selected js out as a new method
  * Cmd + Shift + N; //navigate w global search
  * Cmd + shift + M //bookmark current line    
  * Cmd + shift + O  //Reveal in file in finder (custom in webstorm only)
  * Cmd + shift + E //recent edited files
  * Cmd + E //recent opened files
  * Cmd + shift + P //recent opened project
  * Cmd + shift + W //close current project
  * Cmd + W //close current tab
  
  * Cmd + ctrl + H //horizontal 2 tab layout
  * Cmd + ctrl + V //Vertical 2 tab layout
  
  * Cmd + alt + V //paste from history clipboard

- Config for java stack
https://gecgithub01.walmart.com/GlobalProducts/atlas/blob/master/frontend/docs/ide-setup/intellij-idea.md

- Tricks
  * Solving Java warming "diamond operator is not supported in -source 1.6"
  
    __Solution:__ cmd + ; goto Product Structure and set "Project Language Level" to 7.0
     
  * InteillJ seems to indexing files forever in large proejct
  
    __Solution:__ manual edit root project.iml file/exclude from non-need indexing folders "Mark directory as Excluded"

### Reference 
- https://laravel-news.com/2014/03/phpstorm-tips-and-tricks/
