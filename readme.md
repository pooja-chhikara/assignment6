#parcel(http://parceljs.org/) zero config build tool
-dev build
-local s/r
-hmr -hot module replacement(reload page/live server)
-file watching algo-written in c++-wch takes less time every repeated build
-caching
-image optimization
-minification
-bundling
-compress
-consistent hashing(
        a distributed hashing scheme that operates independently of the number of servers or objects in a distributed hash table by assigning them a position on an abstract circle, or hash ring. This allows servers and objects to scale without affecting the overall system
    )
-code splitting
-differential bundling(support older browsers)
-diagnostic(display error on screen)
-error handling
-use https as well


# dist folder 
    it contain dev build r prod build
    in npx parcel build index.html, it will build, bundle all the files in dist folder
    same dist is used in dev build.
    hosted stuff or output comes from dist folder
    (with npx command, it generates a dev build and host on 1234(dist folder) )
    parcel+dist will gv live server thing



## export :-> named and default
## React Hooks(normal JS utility function)
### useState()-it is used to create superpowerful variables in react
    -import it from react  as named import
    -it is called state bcz it control the state of the application
    -scope will be inside that component
    -everytime state var update react rerender the component 

### useEffect()