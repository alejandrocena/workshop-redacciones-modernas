const immutable = require('immutable');

let ImagesByTag = new immutable.Map();

ImagesByTag = ImagesByTag
  .set("Melania Trump", [
    "https://gcdn.emol.cl/amor/files/2018/01/1510157192176.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/melaniatrump-1531468370.jpg?crop=1.00xw:0.279xh;0,0.0118xh&resize=1200:*",
  ])
  .set("Twitter", [
    "https://sugarcrmhispano.com/wp-content/uploads/2018/03/Tweets-Infinitos-Con-Esta-Nueva-Actualizaci%C3%B3n-768x652.png",
  ])
  .set("Aretha Franklin", [
    "https://static.iris.net.co/semana/upload/images/2018/8/16/579655_1.jpg",
    "https://s.abcnews.com/images/GMA/aretha-franklin-gty-jpo-180813_hpEmbed_4x5_992.jpg"
  ])
  .set("Barack Obama",[
    "https://cdni.rt.com/actualidad/public_images/2015.02/article/54e034af71139e075a8b4581.jpg",
    "http://assets.abriendobrecha.tv.s3.amazonaws.com/wp-content/uploads/2017/10/Barack-Obama-estamos-en-el-siglo-XXI-no-en-el-XIX.jpg",
  ])
  .set("Obama",[
    "https://cdni.rt.com/actualidad/public_images/2015.02/article/54e034af71139e075a8b4581.jpg",
    "http://assets.abriendobrecha.tv.s3.amazonaws.com/wp-content/uploads/2017/10/Barack-Obama-estamos-en-el-siglo-XXI-no-en-el-XIX.jpg",
  ])
  .set("Sharknado",[
    "https://www.washingtonpost.com/resizer/YigMdydsE3x9gdhW7B79-E3YkFg=/1024x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NHCXKWTG6Y2FNDK7A3TLONZWVE.jpg",
    "https://www.washingtonpost.com/resizer/bv_JKgrCL5Y0-tKrBzTmT7wQC6M=/1024x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PFWPFUIUTQ6BPKPTVPSSL5MUFI.jpg"
  ])
  .set("alligator attack",[
    "https://ekstrabladet.dk/incoming/4tazr3/6252118/IMAGE_ALTERNATES/relationBig_910/alligator-attacks-",
  ])
  .set("Hilton Head Island",[
    "https://www.sciway.net/maps/hilton-head-sc-map.gif.pagespeed.ce.XSJTEO7khm.gif",
  ])
  .set("scholarship",[
    "https://wmich.edu/sites/default/files/styles/850w/public/images/u586/2016/banner.jpg?itok=EFYSobvB",
    "",
  ])
  .set("electricity",[
    "https://www.kickassfacts.com/wp-content/uploads/2016/04/Electricity.jpg",
  ])
;

module.exports = ImagesByTag;