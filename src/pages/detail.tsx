
import { IPage, Mahasiswa, Major, Univ } from '../interfaces/page'
import { useState, useEffect } from 'react';
import { HomeLayout, Logo, Title } from '../styles/_emoticon'

import { LoadingOutlined } from '@ant-design/icons'
import { Form, Input, Button, Select } from 'antd';
import { CekAPI } from '../services';

import logo from '../images/image_front.png'
import Details from '../component/details'

const { Option } = Select;

const HomePage: React.FunctionComponent<IPage> = props => {
  const [dataUniv, setDataUniv] = useState<any>([]);
  const [dataMajor, setDataMajor] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingFind, setLoadingFind] = useState<boolean>(false);
  const [university, setUniversity] = useState<Univ>();
  const [major, setMajor] = useState<Major>();
  const [mahasiswa, setMahasiswa] = useState<Mahasiswa | boolean>(false);

  const [form] = Form.useForm();

  useEffect(() => {
    fetchUniv('')
    setLoadingFind(false)
  }, [])

  //University
  const fetchUniv = (params: string) => {
    setLoadingFind(true)
    CekAPI.FindUniversity(params).then((res) => {
      setDataUniv(res.data)
      setLoadingFind(false)
    }).catch((err) =>
      console.log(err)
    );
  }
  function onChangeUniv(value: string) {
    setUniversity({
      id: value
    });
  }

  function onSearchUniv(val: string) {
    fetchUniv(val);
  }
  //Major
  const fetchMajor = (params: string) => {
    setLoadingFind(true)
    CekAPI.FindMajor(params, university?.id).then((res) => {
      setDataMajor(res.data)
      setLoadingFind(false)
    }).catch((err) =>
      console.log(err)
    );
  }
  function onChangeMajor(value: string) {
    setMajor({
      id: value
    });
  }
  function onSearchMajor(val: string) {
    fetchMajor(val);
  }
  //NIM
  function onFinish(value: any) {
    setLoading(true)
    CekAPI.StudentDetails(value.univ, value.major, value.nim).then((res) => {
      if (res.data.length > 0) {
        setMahasiswa({
          name: res.data[0].nama,
          gender: res.data[0].jenis_kelamin,
          wn: res.data[0].kewarganegaraan,
          terdaftar: {
            nim: res.data[0].terdaftar.nim,
            university: res.data[0].terdaftar.nama_pt,
            prodi: res.data[0].terdaftar.nama_prodi,
            ipk: res.data[0].terdaftar.ipk,
            sks: res.data[0].terdaftar.sks,
            smst: res.data[0].terdaftar.smt_tempuh,
            in: res.data[0].terdaftar.tgl_masuk,
          }
        })
      }
      else setMahasiswa(true)
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
      console.log(err)
    }
    );
  }

  return (
    <HomeLayout>
      {!mahasiswa ? (
        <>
          <Title>
            Yuk Cari Identitas Kemahasiswaan Kamu!
          </Title>
          <Logo>
            <img src={logo} alt='logo' width={150} height={150} />
          </Logo>
          <Form form={form} onFinish={onFinish}>
            {loadingFind ? <LoadingOutlined style={{ marginRight: 15 }} /> : null}
            {loadingFind ? "Mohon Tunggu Data Sedang Diambil" : null}
            <Form.Item name="univ" label="University" className="label" rules={[{ required: true }]}>
              <Select
                showSearch
                placeholder="Find your University"
                optionFilterProp="children"
                onChange={onChangeUniv}
                onSearch={onSearchUniv}
                filterOption={(input, option) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {dataUniv.map((data: any, k: number) => data.nama !== 'N/A' &&
                  <Option value={data.id} key={k}>
                    {data.nama}
                  </Option>
                )}
              </Select>
            </Form.Item>
            {university &&
              <Form.Item name="major" label="Major" className="label" rules={[{ required: true }]}>
                <Select
                  showSearch
                  placeholder="Find Your Major"
                  optionFilterProp="children"
                  onChange={onChangeMajor}
                  onSearch={onSearchMajor}
                  filterOption={(input, option) =>
                    option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {dataMajor.map((data: any, k: number) => data.nama !== 'N/A' &&
                    <Option value={data.id} key={k}>
                      {data.nama}
                    </Option>
                  )}
                </Select>
              </Form.Item>
            }
            {major &&
              <Form.Item name="nim" label="NIM" className="label" rules={[{ required: true }]}>
                <Input placeholder='Input Your NIM' />
              </Form.Item>
            }
            <Form.Item style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                {loading ? "Mohon tunggu beberapa saat" : "Find"}
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : (
        <Details data={mahasiswa} />
      )}
    </HomeLayout>
  )
}

export default HomePage;
