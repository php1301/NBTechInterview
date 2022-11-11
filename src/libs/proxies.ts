import { load } from "cheerio";
import axios from "axios";

export const getProxies = async () => {
    try {
        const ip_addresses: any = [];
        const port_numbers: any = [];

        const data = await axios.get("https://sslproxies.org/");
        const $ = load(data?.data);

        $("td:nth-child(1)").each(function (index, value) {
            ip_addresses[index] = $(this).text();
        });

        $("td:nth-child(2)").each(function (index, value) {
            port_numbers[index] = $(this).text();
        });

        ip_addresses.join(", ");
        port_numbers.join(", ");

        const random_number = Math.floor(Math.random() * 100);
        const proxy = `http://${ip_addresses[random_number]}:${port_numbers[random_number]}`;
        return {
            ip: ip_addresses[random_number],
            port: port_numbers[random_number],
            proxy,
        };
    } catch (e) {
        console.log("Error loading proxy, please try again", e);
    }
};
