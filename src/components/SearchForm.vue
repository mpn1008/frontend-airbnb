<template>
        <div class="container-fluid">
           
            <ul class="top-nav">
                <li><a href="#"> English </a></li>
                <li><a href="#"> $USD </a></li>
                <li><a href="#"> Host a home </a></li>
                <li><a href="#"> Host an experience </a></li>
                <li><a href="#"> Help </a></li>
                <li><a href="#"> Sign up </a></li>
                <li><a href="#"> Log in </a></li>
            </ul>
            <div class="clearfix"></div>
            <div class="row">
                <div class="col-sm-8 offset-sm-2 searchbox">
                        <h2>Book unique places to stay and things to do.</h2>
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label>WHERE</label>
                                <input type="text" v-model="place" id="place" name="place" class="form-control" :class="{ 'is-invalid': submitted && $v.place.$error }" />
                                <div v-if="submitted && $v.place.$error" class="invalid-feedback">
                                    <span v-if="!$v.place.required">Required field</span>
                                    <span v-if="!$v.place.minLength">Please enter more than 4 characters</span>
                                </div>
                            </div>
                            
                            <div class="form-group wrap">
                                 <label>CHECK-IN</label>
                                 <div class="clearfix"></div>
                                <date-picker class="datepick" v-model="checkIn" valueType="format"></date-picker>
                            </div>

                            <div class="form-group wrap">
                                <label>CHECKOUT</label>
                                <div class="clearfix"></div>
                                <date-picker class="datepick" v-model="checkOut" valueType="format"></date-picker>
                            </div>

                            <div class="form-group">
                                <label>ADULTS</label>
                                <input type="number" class="form-control" value=0>
                            </div>

                            <div class="form-group">
                                <label>CHILDREN</label>
                                <input type="number" class="form-control" value=0>
                            </div>
                               
                            <div class="form-group">
                                <div class="clearfix"></div>
                                <button class="btn search-btn">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
</template>

<script>

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { required, minLength } from "vuelidate/lib/validators";

const Axios = require('axios');
const url = "http://localhost:8000/api/";

    export default {
        name: "app",
        data() {
            return {
                posts:[],
                place:"",
                checkIn:null,
                checkOut:null,
                submitted: false
            };
        },
        validations: {
            place: { required, minLength: minLength(5) },
        },
        methods: {
            async handleSubmit(e) {
                this.submitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                await Axios.get(url + this.place+"/" + this.checkIn +"/" + this.checkOut).then((res) => {
                    this.posts = res.data;
                });
                await alert("Search Result: \n\n" + JSON.stringify(this.posts,null,'\t'));
            }
        }
    };
</script>

<style scoped>
.container-fluid {
    background-image:url("https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg");
    height:100vh;
    background-position:center;
    background-size: cover;
}
.searchbox{
    background-color:white;
    margin-right: 70%;
    margin-left: 100px;
    margin-top: 85px;
    flex: 0 0 420px;
    padding: 35px;
}
.form-group label{
    font-size:13px !important;
}
.top-nav{
    float:right;
    margin-top: 30px;
    margin-right: 8px !important;
}

.top-nav li a{
    text-decoration: none;
    color: white;
    font-size: 14px;
}

.top-nav li{
    display: inline-block;
    margin-left:28px;
}

.top-nav li a:hover{
    border-bottom: 1.5px solid;
    padding-bottom: 25px;
    color: white;
}

.datepick{
    display: flex;
    width: 175px;
}

.wrap{
    float:left;
}

.search-btn{
    float:right;
    background-color:#FF5A5F;
    color:white;
    font-weight: 700;
    padding: 10px 18px;
}

</style>