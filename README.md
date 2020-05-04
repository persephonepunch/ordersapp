# ordersapp
 
#To Dos:

Add Script-Tags that will let you use App Data in Front End Code for Forms Submissions
[https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag?api[version]=2020-04]

#Deployment Instructions (thank you for this @Iskandar)
[https://github.com/Shopify/shopify-app-cli/issues/277#issuecomment-522375162]

Deploying to heroku
For those struggling with deploying to Heroku I've included a step by step below.
This is assuming you already have a heroku account - if not go ahead & create one here

Set up Heroku
Ensure you have the Heroku CLI installed - See here
heroku login : login to heroku
git init : initialise git
heroku create : create a heroku app
Follow on with the next steps using the newly created heroku app credentials

Update .env file
The following is the supplied .env.example. Your .env file should look very similar to this with the correct credentials to have the app working using ngrok.

SHOPIFY_API_KEY="YOUR_SHOPIFY_API_KEY"
SHOPIFY_API_SECRET_KEY="YOUR_SHOPIFY_SECRET"
HOST="YOUR_TUNNEL_URL"
SHOP="my-shop-name.myshopify.com"
SCOPES=read_products, write_products
Update the file to match the following - using your heroku app url:

SHOPIFY_API_KEY=YOUR_SHOPIFY_API_KEY
SHOPIFY_API_SECRET_KEY=YOUR_SHOPIFY_SECRET
HOST=https://MY-HEROKU-APP.herokuapp.com/
SHOP=my-shop-name.myshopify.com
SCOPES=read_products, write_products
Note: remove all " ( quotation marks ) & include whatever scopes your app requires.

Update URLs
In your app setup, update the URLs to match your .env file. Change out the ngrok URLs to your heroku URLs. See below:

image

Setup Config Vars in Heroku Admin
Access your heroku dashboard & go into your apps overview pane.
Under settings there is a "Config Vars" section.
Within this section add the required info, see below for example.
config

Time to Build
In your terminal, within the root directory of your app

git add .
git commit -m "init commit"
git push heroku master
Go through Authentication URL
Visit authentication URL again:
https://MY-HEROKU-APP.herokuapp.com/auth?shop=my-shop-name.myshopify.com

