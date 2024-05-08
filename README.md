# Project REST-Rant

## REST-Rant is an app where users can review restaurants.

### Not only a great app for customers looking for a great place to eat but an awesome way for Restaurants to show off their cullinary skills by connecting with customers. Whether looking for a poetic coffee house like the JAVA SCRIPT , fresh fish at the "Hot Tuna Melt Lounge" or a great sandwhich at the"Cuban Sandwich Supreme". this is the place to find it. 
 


| Method |        Path             |          Purpose                              
|------- |----------------------   |----------------------------------------        |
| GET    | /                       | Home page                                      |
| GET    | /places                 | Places index page                              |
| POST   | /places                 | Create new place                               |
| GET    | /places/new             | Form page for creating a new place             |
| GET    | /places/:id             | Details about a particular place               |
| PUT    | /places/:id             | Update a particular place                      |
| GET    | /places/:id/edit        | Form page for editing an existing place        |
| DELETE | /places/:id             | Delete a particular place                      |
| POST   | /places/:id/rant        | Create a rant (comment) about a place          |
| DELETE | /places/:id/rant/:rantid| Delete a rant (comment) about a place          |
| GET    | *                       | 404 page (matches any route not defined above) |



## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

**rants**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |
https://images.unsplash.com/photo-1566995541428-f2246c17cda1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D