# Been There, Done That!

Been There, Done That! is a World of Warcraft character achievement tracker that enables a user to pull data on their character in the popular MMO World of Warcraft and show them achievements they have completed, as well as achievements they have not completed and gives helpful links for information on how to complete them. 

## Wireframes

NOTE: I will not be using the actual WoW logo, I will draw my own over the weekend. Copyright!

Home Page

![home](https://i.imgur.com/14hJAE5.png)

Character Lookup Form

![search](https://i.imgur.com/KB96nZG.png)

Achievement Listing(can also save character to profile)

![list](https://i.imgur.com/DqdYRRd.png)

Single Achievement Info

![show](https://i.imgur.com/daYFokk.png)

Saved Characters Page

![profile](https://i.imgur.com/ZtY5h2U.png)

## API

I will be using the Battle.net World of Warcraft Character Achievements Summary API. The main website is [here](https://develop.battle.net/). I signed up and acquired a client ID and secret and used postman to do a couple get requests with my character names and a friend's character to make sure it worked and it does.

Pull Request 1

![pull-1](https://i.imgur.com/M54hldr.png)

Pull Request 2

![pull-2](https://i.imgur.com/0OJif10.png)

Note the different numbers in "total_quantity" for each request, because they're different characters!

I'll be using the data to display the following:
    - total quantity
    - achievement name
    - completed timestamp
    - description of achievement

## Components

As shown in my wireframes, I will have components for the following:

    - Home Page

        - sign in/log in buttons leading to a user auth page on sign up or a log in page 

    - Character Search Form

        - form for inputting character info to send to API

    - Achievement Listing

        - uses input to show characters list of achievements completed/incomplete

        - will be limited to 25 per page

        - each achievement will link to a separate page showing detailed data on that specific achievement

        - save button to save that character data to your profile

    - Achievement Show Page

        - detailed data of achievement

            - name

            - date completed

            - description

        - STRETCH- also links to another website with helpful tips on how to complete achievements

    - Saved Character Listing

        - page listing each character you have saved to your profile, in turn linking to that character's achievement listing page

    - Navigation

        - on each page with links to saved character listing/home page
