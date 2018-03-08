import VueRouter from 'vue-router'
import Store from '../store/index'


function getComponent (name){
	return require('../components/' + name);
}


const routes = [
	{
		path:'/',
		name:'home',
		meta:{
			title:'首页'
		},
		component:getComponent('public/home'),
	}
];


const router = new VueRouter({
  	mode: 'history',
  	routes
})


export default router


