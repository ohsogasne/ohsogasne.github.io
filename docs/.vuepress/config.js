module.exports = {
	
  themeConfig: {
		/* 页面导航 */
    nav: [
     {
			 text:'Home',link:'link'
		 },
		 {
			 text:'About',
			 items:[
				 {
					 text:'help',
					 items:[
						 {text:'ohsogasne',link:'/about'}
					 ]
				 }
			 ]
		 },
		 ],
		 /* 搜索设置*/
		 search: true,
		 searchMaxSuggestions: 10,
		 /* 侧边栏设置*/
		 sidebar: [
		       {
		         title: '前端三剑客',
		         collapsable: true,
		         children: [
		           '/CSS/',
		           '/HTML/',
		           '/JavaScript/'
		         ]
		       },
		       {
		         title: 'Vue.js',
		         collapsable: true,
		         children: [
		           '/Vue/',
		           '/Vue/Vuex.md',
		           '/Vue/Vue-Router.md',
		         ]
		       }
		     ],
				lastUpdated: true,
      }
}