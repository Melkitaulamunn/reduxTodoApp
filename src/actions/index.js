export const EKLE = "EKLE";
export const TEMIZLE = "TEMİZLE";
export const ISARETLE = "İŞARETLE";

export const listeyeEkle = text => {
  return { type: EKLE , payload: text};
};
export const isaretle = id => {
  return { type : ISARETLE, payload: id};
};
export const temizle = () => {
  return {type: TEMIZLE};
};