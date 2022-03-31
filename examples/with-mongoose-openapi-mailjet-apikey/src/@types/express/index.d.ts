import { ApiPartnerType } from '@services/internal/infrastructure/file/apikey';
// IMPORT_GENERATED
// END_GENERATED

/* eslint-disable */
declare global {
  namespace Express {
    interface Request {
      // @XXX: Example override of express
      message: string;
      partner: ApiPartnerType;

      // ADD_GENERATED_TYPE
      // END_GENERATED
    }
  }
}

// @XXX: Sometimes need to declare express like below ⬇ or above ⬆

// namespace Express {
//   interface Request {
//     // @XXX: Example override of express
//     message: string;
//     partner: ApiPartnerType;

//     // ADD_GENERATED_TYPE
//     // END_GENERATED
//   }
// }
/* eslint-enable */
