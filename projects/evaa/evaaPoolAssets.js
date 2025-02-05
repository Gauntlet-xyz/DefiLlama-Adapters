const ADDRESSES = require("../helper/coreAssets.json");

const evaaPoolAssets = {
  'main': { // EVAA main pool
    poolAddress: "0:bcad466a47fa565750729565253cd073ca24d856804499090c2100d95c809f9e", // EVAA main pool address
    assets: [
      {
        address: ADDRESSES.ton.TON,
        assetId: "11876925370864614464799087627157805050745321306404563164673853337929163193738", // symbol -> sha256 hex -> bigint
      }, // TON
      {
        address: ADDRESSES.ton.USDT,
        assetId: '91621667903763073563570557639433445791506232618002614896981036659302854767224',
      }, // USDT
      {
        address: ADDRESSES.ton.tsTON,
        assetId: '23103091784861387372100043848078515239542568751939923972799733728526040769767',
      }, // tsTON
      {
        address: ADDRESSES.ton.stTON,
        assetId: '33171510858320790266247832496974106978700190498800858393089426423762035476944',
      }, // stTON
      {
        address: ADDRESSES.ton.jUSDT,
        assetId: '81203563022592193867903899252711112850180680126331353892172221352147647262515',
      }, // jUSDT
      {
        address: ADDRESSES.ton.jUSDC,
        assetId: '59636546167967198470134647008558085436004969028957957410318094280110082891718',
      }, // jUSDC
    ]
  },
  'lp': { // EVAA LP pool
    poolAddress: "0:489595f65115a45c24a0dd0176309654fb00b95e40682f0c3e85d5a4d86dfb25", // EVAA LP pool address
    assets: [
      {
        address: ADDRESSES.ton.TON,
        assetId: "11876925370864614464799087627157805050745321306404563164673853337929163193738", // symbol -> sha256 hex -> bigint
      }, // TON
      {
        address: ADDRESSES.ton.USDT,
        assetId: '91621667903763073563570557639433445791506232618002614896981036659302854767224',
      }, // USDT
      {
        address: ADDRESSES.ton.TONUSDT_DEDUST,
        assetId: '101385043286520300676049067359330438448373069137841871026562097979079540439904',
      }, // TONUSDT_DEDUST
      {
        address: ADDRESSES.ton.TON_STORM,
        assetId: '70772196878564564641575179045584595299167675028240038598329982312182743941170',
      }, // TON_STORM
      {
        address: ADDRESSES.ton.USDT_STORM,
        assetId: '48839312865341050576546877995196761556581975995859696798601599030872576409489',
      }, // USDT_STORM
    ]
  },
  'alts': { // EVAA alts pool
    poolAddress: "0:0d511552ddf8413bd6e2be2837e22c89422f7b16131ba62be8d5a504012d8661", // EVAA alts pool address
    assets: [
      {
        address: ADDRESSES.ton.TON,
        assetId: "11876925370864614464799087627157805050745321306404563164673853337929163193738", // symbol -> sha256 hex -> bigint
      }, // TON
      {
        address: ADDRESSES.ton.USDT,
        assetId: '91621667903763073563570557639433445791506232618002614896981036659302854767224',
      }, // USDT
      {
        address: ADDRESSES.ton.NOT,
        assetId: '63272935429475047547160566950018214503995518672462153218942708627846845749085',
      }, // NOT
      {
        address: ADDRESSES.ton.DOGS,
        assetId: '50918788872632134518291723145978712110022476979988675880017580610805163693009',
      }, // DOGS
      {
        address: ADDRESSES.ton.CATI,
        assetId: '101563884026323503647891287974015286987607783840172791059852695820980647056177',
      } // CATI
    ]
  }
}

module.exports = evaaPoolAssets