/**
 * Axoios GET通信
 */

// axiosインポート
import axios from "axios";

const baseUrl = "https://api.zipaddress.net/?zipcode=";
const request = "5300053";
const getUrl = `${baseUrl}${request}`;

// Getリクエスト
export default axios.get(getUrl);
