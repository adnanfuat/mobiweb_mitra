
/// yigitruzgaruzun@gmail.com'u verir , yigitruzgaruzun@gmail.com'u alırsınız

export const mailName = ({ mail }) => {

  var nameMatch = mail?.match(/^([^@]*)@/); // Mailin @ işaretinden önceki kısmını al..
  var name = nameMatch ? nameMatch[1] : null;

  return {name}
}
