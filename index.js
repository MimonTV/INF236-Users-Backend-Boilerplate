import dotenv from "dotenv";
import server from "./src/app";

dotenv.config();
server.listen(process.env.PORT, () =>
	console.log(`Backend corriendo en http://localhost:${process.env.PORT}`)
);
