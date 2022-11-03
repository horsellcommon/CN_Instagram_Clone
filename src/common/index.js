export const writeCookie = (key, value, days) => {
  let date = new Date();
  days = days || 365;
  date.setTime(+date + days * 86400000);
  let cookie = (document.cookie =
    key + "=" + value + "; expires=" + date.toGMTString() + "; path=/");
  return cookie;
};
