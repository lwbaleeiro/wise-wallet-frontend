<template>
    <div class="register-container">
      <div class="register-box">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="cpf">CPF</label>
            <input type="text" v-model="cpf" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" required>
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <router-link to="/">Login here</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        cpf: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        axios.post('http://localhost:8080/api/v1/user/create', {
          name: this.name,
          cpf: this.cpf,
          email: this.email,
          password: this.password
        })
        .then(response => {
          // Handle successful registration
          console.log('Registration successful:', response.data);
        })
        .catch(error => {
          // Handle registration error
          console.error('Registration failed:', error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .register-box {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    background-color: #38a077;
  }
  </style>
  