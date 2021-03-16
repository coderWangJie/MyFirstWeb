var app = new Vue({
    el: '#app',
    data: {
          message: 'Hello Vue!'
     }
});

const app2 = new Vue({
    el: '#app2',
    data: {
        value: '这里是提示内容！'
    }
});

const app3 = new Vue({
    el: '#app3',
    data: {
        show: true
    }
});

const app4 = new Vue({
    el: '#app4',
    data: {
        list: [
            {name: '盖伦'},
            {name: '嘉文'},
            {name: '赵信'},
            {name: '李青'}
        ]
    }
});

var app5 = new Vue({
    el: '#app5',
    data: {
          message: 'Hello Vue!'
     }
});

Vue.component('my-component', {
    props: ['xx'],
    template: '<li>{{ xx.name }}</li>'
});

var app6 = new Vue({
    el: '#app6',
    data: {
        todo: [
            {id: 0, name: '盖伦'},
            {id: 1, name: '嘉文'},
            {id: 2, name: '赵信'},
            {id: 3, name: '李青'}
        ]
    }
});

new Vue({
    el: '#app7',
    data: {
          message: 'Hello Vue!'
    },
    // 生命周期钩子——
    beforeCreate () {
        console.log('beforeCreate —— message= ' + this.message)
    },
    // 生命周期钩子——
    created () {
        console.log('created —— message= ' + this.message)
    },
    // 生命周期钩子——
    beforeMount () {
        console.log('beforeMount —— message= ' + this.message)
    },
    // 生命周期钩子——
    mounted () {
        console.log('mounted —— message= ' + this.message)
    },
    // 生命周期钩子——数据已更新，页面未更新前
    beforeUpdate () {
        console.log('%c%s', 'color: red', 'beforeUpdate —— message= ' + this.message)
    },
    // 生命周期钩子——页面更新
    updated () {
        console.log('%c%s', 'color: green', 'updated —— message= ' + this.message)
    },
    // 生命周期钩子——
    beforeDestroy () {
        console.log('beforeDestroy —— message= ' + this.message)
    },
    // 生命周期钩子——
    destroyed () {
        console.log('destroyed —— message= ' + this.message)
    },
    // 自定义函数
    methods: {
        callme () {
            this.message = 'Hi! WangJ'
        }
    }
    
})
