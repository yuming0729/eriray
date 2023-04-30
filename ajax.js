Vue.createApp({
    data:function(){
        return{
            data:'小名'
        }
    },
    methods:{
       
    },

    mounted: function() {
       axios.get('http://localhost:8080/Health%20care%20website%20Bootstrap/')
        .then(function(response) {
            console.log(response)  
       })
    }




}).mount('#app')



