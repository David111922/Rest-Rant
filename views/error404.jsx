const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>

              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="images/404error.jpg" alt="404" />
<div>Photo source<a src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" > Unsplash </a>      
</div>

              </div>

          </main>
      </Def>
    )
  }
  
module.exports = error404
