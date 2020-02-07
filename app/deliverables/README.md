<h2><center>CSI 3140 Project Deliverable 2</center></h2>

<center><img src="/app/assets/logo.svg?sanitize=true" height="100" width="100">
</img>
</center>

> Ferozuddin Alizada
> 8922142
>
> **Deliverable 2:** This is a Mock Up and is barely functional since the majority of the web applicaiton relies on the backend and data retrival. Most of the links and the functionalities are reliant on the data it receives from the backend hence most of the buttons will not load a new page. Also because this will be a single page applicaiton there is only one page that has all the content. The source code for the HTML and CSS can be found in the `app/src/` folder.

---

## Table of contents

1. [Introduction](#introduction)
2. [Colour Palette](#colour-palette)
   1. [Primary Colours](#primary-colours)
   2. [Secondary Colours](#secondary-colours)
3. [Fonts and Type Scale](#fonts-and-type-scale)
4. [Icons](#icons)
5. [Buttons and Form Elements](#buttons-and-form-elements)
6. [UI Components](#ui-components)

### Introduction:

This is a basic HTML and CSS layout of the music streaming website that we will be building. As of now most of the functionality is static and can be viewed here [MusiQ](/app/src/index.html)

### Colour Palette

The main color pallete for our music streaming website will be as follow. You can find the Color pallete in the in the app/src/index.css file. It has been used quite a few times through out the file, so it will be difficult to include all the line numbers.

#### Primary Colours

- ![#081317](https://placehold.it/15/081317/000000?text=+) `#081317`
- ![#3A3E3B](https://placehold.it/15/3A3E3B/000000?text=+) `#3A3E3B`
- ![#484D6D](https://placehold.it/15/3A3E3B/484D6D?text=+) `#484D6D`
- ![#001021](https://placehold.it/15/001021/484D6D?text=+) `#001021`
- ![#211626](https://placehold.it/15/211626/484D6D?text=+) `#211626`

#### Secondary Colours

- ![#FFFFFF](https://placehold.it/15/FFFFFF/484D6D?text=+) `#FFFFFF`
- ![#d9534f](https://placehold.it/15/d9534f/484D6D?text=+) `#d9534f`
- ![#4caf50](https://placehold.it/15/4caf50/000000?text=+) `#4caf50`

### Fonts and Type Scale

For most of the project I used Google's Roboto as my default family font and incase it is not availble from the Google CDN Sans-serif will be used. The font has been linked in the app/src/index.html file on line 8. And the css contains the declartion of the family font as the default on line 12.
[Roboto](https://fonts.google.com/specimen/Roboto?selection.family=Roboto)

As for Scaling I used relative scaling i.e `em` measurements and `px` since since of the cards and image sizes needs to be decalred on the HTML side to help in efficient loading.

### Icons

For the icons I used the free icon templates that is available online on
[Fonts Awesome](https://fontawesome.com/icons?d=gallery). The Icons are available on the web app I designed [Icons](/app/src/index.html).

![image](/app/assets/snap-6.png)
![image](/app/assets/snap-5.png)

### Buttons and Form Elements

I have used the most basic structure available in HTML as buttons to simply the user experience. Instead of making complicated button designs I used `li` elements as buttons. As seen on the navbar and the sidebar in the web app. Also available in app/src/index.html file.
There are may form elements used in this applications since it will cause the project to become to complicated.

![image](/app/assets/snap-3.png)

![image](/app/assets/snap-4.png)

![image](/app/assets/snap-1.png)

![image](/app/assets/snap-2.png)

### UI Components

I have used the basic built in pop-up from the broswer to notify when a person clicks on the desired song to be played. It will alert that the song is being played. I might move to used a modal in the future since this is an HTML/CSS and not much JavaScript is involved I didn't design a modal as of yet. Although there are basic forms of play and next and previous buttons and a progress bar that will heavily rely on JavaScript to function.

![image](/app/assets/snap-1.png)

![image](/app/assets/snap-3.png)
![image](/app/assets/snap-4.png)

### Installation

Simply copy the repo in your desktop and open the HTML file from `app/src/index.html`. This will run the web application. A proper build tool will be deployed with the next deliverable.
