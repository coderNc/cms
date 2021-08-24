let BASE_URL = '';
const TIME_OUT = 10000;
// const isMusic = false;

if (process.env.NODE_ENV === 'develoment') {
  BASE_URL = '/api';
}

export { BASE_URL, TIME_OUT };
