const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot4b1w3/",
            name: "springboot4b1w3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4b1w3/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "新生宿舍管理系统"
        } 
    }
}
export default base
