import { baseUrl } from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {

	if(type !== 'get' && type !== 'post'){
		throw('fetch type error');
	}

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
		return axios({
			url,
			method: 'get'
			baseURL : baseUrl,
		})
	}else{

	}

	axios({
		method: type,
		url
	})

}