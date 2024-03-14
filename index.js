import express from "express";
import path from "path";

const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),'src','views'));