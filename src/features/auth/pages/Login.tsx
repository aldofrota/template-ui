import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "@/hooks/useAuth";

const { Title } = Typography;

const Login: React.FC = () => {
  const { login } = useAuth();

  const onFinish = (values: any) => {
    login(values.email, values.password);
  };

  return (
    <Card>
      <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
        Login
      </Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Por favor, insira seu email!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Por favor, insira sua senha!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Senha"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
