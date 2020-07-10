// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb://shabeebalivk:Shabeeb123@ds133192.mlab.com:33192/reactreserve",
    JWT_SECRET: "galaxy",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/shabeebalivk/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};

// const {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
//   MONGO_SRV,
//   JWT_SECRET,
//   CLOUDINARY_URL
// } = require('next/constants')

// // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
// module.exports = (phase) => {
//   // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER
//   // when `next build` or `npm run build` is used
//   const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
//   // when `next build` or `npm run build` is used
//   const isStaging =
//     phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

//   console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

//   const env = {
//     RESTURL_SPEAKERS: (() => {
//       if (isDev) return 'http://localhost:4000/speakers'
//       if (isProd) {
//         return 'https://www.siliconvalley-codecamp.com/rest/speakers/ps'
//       }
//       if (isStaging) return 'http://localhost:11639'
//       return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
//     })(),
//     RESTURL_SESSIONS: (() => {
//       if (isDev) return 'http://localhost:4000/sessions'
//       if (isProd) return 'https://www.siliconvalley-codecamp.com/rest/sessions'
//       if (isStaging) return 'http://localhost:11639'
//       return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
//     })(),
//   }

//   // next.config.js object
//   return {
//     env,
//   }
// }
 