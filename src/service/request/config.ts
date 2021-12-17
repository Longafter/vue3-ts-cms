let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://pingzhao.org/dev'
  BASE_NAME = 'pingzhao'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://pingzhao.org/prod'
  BASE_NAME = 'zpz'
} else {
  BASE_URL = 'http://pingzhao.org/test'
  BASE_NAME = 'pz'
}

export { BASE_URL, BASE_NAME }
