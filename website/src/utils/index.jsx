import moment from "moment";

export const type = {
  isFunction (v) {
    return typeof v === "function";
  },
  isString (v) {
    return typeof v === "string";
  },
  isArray (v) {
    return v instanceof Array;
  },
  isObject (v) {
    return typeof v === "object";
  },
};

function dateFormate (date, format = null, shift = null) {
  format = type.isString(format) ? format : "YYYY-MM-DD HH:mm:ss";
  shift = type.isFunction(shift) ? shift : (m) => m;
  return date && shift(moment(date)).format(format);
}



export {
  dateFormate
}