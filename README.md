# Mobx-MST-projects
various projects show casing React , Mobx &amp; MST (MobX State Tree)


Project is cloned from this repo: https://github.com/mobxjs/mobx-state-tree/tree/master/packages/mst-example-todomvc
- see also other good project 'mst-example-bookshop' 
- 
- ( $svn checkout  "github repo subdirectory"  ## change  '/tree/master/' to '/trunk/'  https://www.youtube.com/watch?v=1WCZU1hvEJg )

--------------
### General Notes
##### 1. for all React project the most common folder structures is :  
  - entry file public/index.html ( this some how calls index.js in root dir)
  - index.js  --> calls  Components/App.js
  - App.js  -->  call other  components/othercomponents.js 
  
##### 2. mst-exmaple-bookshop  (we got with svn checkout and ran the web app) 
 - this parent model 'shop' has 3 sub models : books, cart, views
 - the top model "shop" is injected to all components, where as in 'todoMVC' there is no injecton.
 - all components/*.js files are  'Const' , where as  in 'todoMVC' they are all " .. extends Component" (react)
 - the hyper links on home page 'All books',  'shopping cart' are manged with some routing etc.. This made things bit complicated. These two UI views can be done simply by following  'todoMVC' views ( ALL, ACTIVE, COMPLETED) . This will make code simple to understand.
 - Devtools and Patch/actions etc.. made code look bit complicated ( ofcourse this is not part of the application)
 - overall, this 'bookshop" coding style make it look complicated, by follwoing 'todoMVC' sytle of coding we can make the appication simple .
