import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { IPage, User } from '../interfaces/page'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../styles/_emoticon'

const HomePage: React.FunctionComponent<IPage> = props => {
  const [user, setUser] = useState<User | null>(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = () => {
    setUser({
      name: "Joy",
      age: 22,
      country: "Indonesia",
      address: {
        street: "Kopo",
        number: 4,
        zip: 40227
      }
    })
  }

  function About() {
    navigate("/about");
  }

  return (
    <Button onClick={About}>
      Hover to change color.
    </Button>
  )
}

export default HomePage;
