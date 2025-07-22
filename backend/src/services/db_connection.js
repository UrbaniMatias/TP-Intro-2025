import { Pool } from "pg";

const con = new Pool();
await con.connect();

export default con;
