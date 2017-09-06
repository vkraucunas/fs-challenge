# FluentStream Technologies Code Challenge
## beer.status()
by [Valerie Kraucunas](https://www.linkedin.com/in/vkraucunas/)

### [Deployed Application](https://beerstatus-vkraucunas.firebaseapp.com/)

### Technologies Used
- React
- Stylus
- Webpack
- Storybook
- Jest, Enzyme

Node version used for development: v7.8.0

### My Approach
1. I started with `create-react-app` and ejected the scripts
1. I installed Redux, and react-redux to maintain a store in the project
1. For styling, I added Stylus, stylus-loader, and updated the webpack configs to use CSS Modules.
1. For testing, I added Storybook and Enzyme (create-react-app apps come with Jest as a test runner out of the box)
1. I set up the Firebase application hosting and hooked it up to my local repo before my first commit.

### Challenges I Faced
1. I typically get tripped up in the "setting up the build" step. This time I found several articles that addressed my questions as concerns as I went.
  - I read tutorials/articles for deploying a create-react-app to Firebase, adding CSS modules, having global color variables set for styles,
1. I don't typically support validation on the client, but because I was working specifically on a client and wanted to show I was thinking about validation, there is light validation on the add a beer form.

### Additional Steps
1. I selected a bottlecap svg from [The Noun Project](https://thenounproject.com/search/?q=beer&i=11779), it was designed by Massimo Ippolito, IT. Hover on it on the page for a little whimsy.
1. I used Coolors to select a color scheme for the project

### Endpoints
_Base URL_: http://beer.fluentcloud.com/v1

**GET**

- Get all beers: `/beer`
- Get single beer: `/beer/:id`

**POST**

- Add a beer: `/beer`
  - Body: `{"name":"Michelob Ultra","likes":"-5"}`

**PUT**

- Change a beer's like count: `/beer/1`
  - Body: `{"likes":"22"}`
