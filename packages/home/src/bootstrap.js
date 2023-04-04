import Header from "nav/Header";
import {Greetings} from "./Greetings";

let header = document.createElement('header-component');
header.innerText = 'Header';
document.body.appendChild(header);
document.body.appendChild(Greetings());
