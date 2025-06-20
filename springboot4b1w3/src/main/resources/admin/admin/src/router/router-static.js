import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import baoxiuxinxi from '@/views/modules/baoxiuxinxi/list'
    import yuanxi from '@/views/modules/yuanxi/list'
    import jiaofeixinxi from '@/views/modules/jiaofeixinxi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import sushexinxi from '@/views/modules/sushexinxi/list'
    import susheanpai from '@/views/modules/susheanpai/list'
    import weishengjiancha from '@/views/modules/weishengjiancha/list'
    import baoxiuchuli from '@/views/modules/baoxiuchuli/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import banji from '@/views/modules/banji/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/baoxiuxinxi',
        name: '报修信息',
        component: baoxiuxinxi
      }
          ,{
	path: '/yuanxi',
        name: '院系',
        component: yuanxi
      }
          ,{
	path: '/jiaofeixinxi',
        name: '缴费信息',
        component: jiaofeixinxi
      }
          ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
          ,{
	path: '/sushexinxi',
        name: '宿舍信息',
        component: sushexinxi
      }
          ,{
	path: '/susheanpai',
        name: '宿舍安排',
        component: susheanpai
      }
          ,{
	path: '/weishengjiancha',
        name: '卫生检查',
        component: weishengjiancha
      }
          ,{
	path: '/baoxiuchuli',
        name: '报修处理',
        component: baoxiuchuli
      }
          ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
          ,{
	path: '/banji',
        name: '班级',
        component: banji
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
