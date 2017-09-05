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

