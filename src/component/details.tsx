import { CheckCircleFilled, CloseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Title, ContainerDetail, Label, Value } from '../styles/_emoticon';

const DetailPage = ({ data }: any) => {

  function backButton() {
    window.location.reload()
  }

  return (
    <>
      {data !== true ? (
        <>
          <Title>
            DATA DITEMUKAN <CheckCircleFilled style={{ color: '#0bea1a' }} />
          </Title>
          <ContainerDetail>
            <Label>
              Student Name
            </Label>
            <Value>
              : {data.name}
            </Value>
          </ContainerDetail>
          <ContainerDetail>
            <Label>
              NIM
            </Label>
            <Value>
              : {data.terdaftar.nim}
            </Value>
          </ContainerDetail>
          <ContainerDetail>
            <Label>
              Gender
            </Label>
            <Value>
              : {data.gender === "L" ? "Laki-laki" : "Perempuan"}
            </Value>
          </ContainerDetail>
          <ContainerDetail>
            <Label>
              Nationality
            </Label>
            <Value>
              : {data.wn}
            </Value>
          </ContainerDetail>
          <ContainerDetail>
            <Label>
              University
            </Label>
            <Value>
              : {data.terdaftar.university}
            </Value>
          </ContainerDetail>
          <ContainerDetail>
            <Label>
              Major
            </Label>
            <Value>
              : {data.terdaftar.prodi}
            </Value>
          </ContainerDetail>
          <ContainerDetail>
            <Label>
              IPK
            </Label>
            <Value>
              : {data.terdaftar.ipk.toFixed(2)}
            </Value>
          </ContainerDetail>
          <ContainerDetail>
            <Label>
              Semester
            </Label>
            <Value>
              : {data.terdaftar.smst}
            </Value>
          </ContainerDetail>
          <ContainerDetail>
            <Label>
              SKS
            </Label>
            <Value>
              : {data.terdaftar.sks}
            </Value>
          </ContainerDetail>
        </>
      ) : (
        <Title>
          DATA TIDAK DITEMUKAN <CloseCircleOutlined style={{ color: 'red' }} />
        </Title>
      )}
      <div style={{ textAlign: 'center' }}>
        <Button type="primary" onClick={backButton} style={{ cursor: 'pointer', marginTop: 16 }}>
          Selesai
        </Button>
      </div>
    </>
  )
}

export default DetailPage;
