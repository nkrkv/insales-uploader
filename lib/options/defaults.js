/**
 * Настройки поумолчанию
 */
module.exports = {
  account: {
    // id: '11111111111111111111111111',
    // token: '222222222222222222222',
    // url: 'shop-41254.myinsales.ru',
    http: true,
  },
  theme: {
    //id: '854716',
    root: '.',
    backup: true,
    assetsSync: true,
    excludeFiles: [],
    onUpdate: ()=>{
      // обновление темы
    },
    assetsDomain: 'https://assets.insales.ru'
  },
  util: {
    openBrowser: true
  },
  plugins: {
    exclude: ['*.min.js', '*.min.css', '*.liquid']
  }
}
