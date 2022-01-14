import Cek from './cek'

export const configApi = (contentType: any ) => {
  let params = {
    headers: {
      "Content-Type": contentType || "application/json",
      Lang: "id",
      ETag: process.env.ETag
    },
  };

  return params;
};

const params = {
  config: configApi,
  defaultParams: {},
};


export const CekAPI = Cek(params);