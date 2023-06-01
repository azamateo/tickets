const app = Vue.createApp({
    data(){
        return{
            headerName: 'Покупка билетов',
            headerDescription: 'Пожалуйста введите ваши данные',
            name:'',
            surname:'',
            middlename:'',
            selectedCountry:'',
            hasBaggage:''
        }
    },
    methods: {
        saveName(event){
            this.name = event.target.value;
        },
        saveSurname(event){
            this.surname = event.target.value;
        },
        saveMiddlename(event){
            this.middlename = event.target.value;
        },
        saveDirection(event){
            this.direction = event.target.value;
        }
    },
    watch:{
        selectedCountry(value){
            this.selectedCountry = value;
        },
        hasBaggage(value) {
            this.hasBaggage = value;
          }

    }
});


app.mount("#app");
