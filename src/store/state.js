let defaultCity = '大丰'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { }

export default {
  city: defaultCity
}
