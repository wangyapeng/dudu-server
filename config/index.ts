const mysqlConfig = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345678",
  database: "dudu",
  synchronize: true,
  logging: false,
};

const authServerHost = "http://192.168.0.188:9999";

export { mysqlConfig, authServerHost };
