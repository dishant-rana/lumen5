### Feel Free to Use the APIs we have built.
* For Captivating video templates(GET request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/template

* For content marketing(GET request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/content_marketing

* For communications(GET request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/communications

* For promotional(GET request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/promotional

* For people & culture(GET request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/people_&_culture

* For localization(GET request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/localization


* For sign up(POST request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/user/add

JSON.body-

{
  "name": "Robert",
  "email": "robert@gmail.com",
  "password": "robert@123"
}

* For login(POST request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/user/login

* For logout(POST request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/user/logout

JSON.body-
{
   "token": value
}

* For token checking(POST request)

https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/user/tokenCheck

JSON.body-
{
  "token": "351566"
}

response will be the data of a user with this token
