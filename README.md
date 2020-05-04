ordersapp
 
To Dos:

Add Script-Tags that will let you use App Data in Front End Code for Forms Submissions
[https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag?api[version]=2020-04]


SHOPIFY CLI COMMANDS

pages, or new webhooks.
 Usage: shopify generate [ billing | page | webhook ]

Subcommands:
 billing: Enable charging for your app. This command generates the necessary code to call Shopify’s billing API.
  Usage: shopify generate billing [ one-time-billing | recurring-billing ]

 page: Generate a new page in your app with the specified name. New files are generated inside the project’s “/pages” directory.
  Usage: shopify generate page <pagename>

 webhook: Generate and register a new webhook that listens for the specified Shopify store event.
  Usage: shopify generate webhook <type>

Examples:
 shopify generate webhook PRODUCTS_CREATE
  Generate and register a new webhook that will be called every time a new product is created on your store.


? What type of webhook would you like to create? 
 1. APP_UNINSTALLED
 2. CARTS_CREATE
 3. CARTS_UPDATE
 4. CHANNELS_DELETE
 5. CHECKOUTS_CREATE
 6. CHECKOUTS_DELETE
 7. CHECKOUTS_UPDATE
 8. COLLECTION_LISTINGS_ADD
 9. COLLECTION_LISTINGS_REMOVE
 10. COLLECTION_LISTINGS_UPDATE
 11. COLLECTION_PUBLICATIONS_CREATE
 12. COLLECTION_PUBLICATIONS_DELETE
 13. COLLECTION_PUBLICATIONS_UPDATE
 14. COLLECTIONS_CREATE
 15. COLLECTIONS_DELETE
 16. COLLECTIONS_UPDATE
 17. CUSTOMER_GROUPS_CREATE
 18. CUSTOMER_GROUPS_DELETE
 19. CUSTOMER_GROUPS_UPDATE
 20. CUSTOMERS_CREATE
 21. CUSTOMERS_DELETE
   ...

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

