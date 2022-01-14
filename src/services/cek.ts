import axios from 'axios';

const Cek = (config: any) => {
  const URL = "https://api.spadadikti.id/register/";
  const endpointPT = "pt?per-page=10&q=";
  const endpointProdi = "prodi?per-page=10&q=";

  return {
    //Search Univestity
    FindUniversity: (params: string | null) =>
      axios.get(
        `${URL}${endpointPT}${params}`
      ),
    //Search Major
    FindMajor: (params?: string, idUniv?: string) =>
      axios.get(
        `${URL}pt/${idUniv}/${endpointProdi}${params}`
      ),
    //Student Details
    StudentDetails: (idUniv: string, prodi: string, nim: string) =>
      axios.get(
        `${URL}pt/${idUniv}/prodi/${prodi}/mahasiswa/${nim}`
      ),

  }

}

export default Cek;