const mysqlConfig = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345678",
  database: "nodemysql",
  synchronize: true,
  logging: false,
};

const authServerHost = "http://localhost:9002";

export { mysqlConfig, authServerHost };
